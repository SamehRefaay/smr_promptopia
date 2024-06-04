'use client';
import { PostProps } from '@/utils/types';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import tick from '../../public/assets/icons/tick.svg';
import copy from '../../public/assets/icons/copy.svg';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../types/theme';

interface Props {
	post: PostProps;
	handleTagClicked?: (tag: string) => void;
}

const PromptCard = ({ post, handleTagClicked }: Props) => {
	const [copied, setCopied] = useState('');
	const { data: session }: any = useSession();
	const pathname = usePathname();
	const router = useRouter();
	const { mode } = useContext(ThemeContext) as ThemeContextType;

	const handleCopy = () => {
		setCopied(post?.prompt);
		navigator.clipboard.writeText(post.prompt);
		setTimeout(() => {
			setCopied('');
		}, 3000);
	};

	const handleDelete = async () => {
		const hasConfirmed = confirm(
			'Are you sure you want to delete this prompt?'
		);

		if (hasConfirmed) {
			try {
				const res = await fetch(`/api/prompt/${post._id}`, {
					method: 'DELETE',
				});

				if (res.ok) router.push('/');
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div
			className={`relative rounded-md ${
				mode === 'light' ? 'bg-white' : 'bg-[#111]'
			} shadow-md p-5`}
		>
			{/* <p className="absolute -right-16 top-20 -rotate-90	 text-xs text-gray-400">
				{post._id}
			</p> */}
			<div className="flex justify-between item-start cursor-pointer">
				<Link
					href={`/profile/${post?.creator?._id}`}
					className="flex justify-start items-center gap-3"
				>
					<Image
						src={post.creator.image}
						alt="profile image"
						width={35}
						height={35}
					/>
					<div>
						<h3
							className={`font-satoshi font-semibold ${
								mode === 'light' ? 'text-gray-900' : 'text-gray-100'
							}`}
						>
							{post?.creator?.name}
						</h3>
						<p className={'font-inter text-sm text-gray-400'}>
							@{post?.creator?.username}
						</p>
					</div>
				</Link>
				<div>
					<Image
						src={copied === post.prompt ? tick : copy}
						alt="copy button"
						width={15}
						height={15}
						onClick={handleCopy}
					/>
				</div>
			</div>
			<div className="">
				<p
					className={`mt-5 text-sm ${
						mode === 'light' ? 'text-gray-600' : 'text-gray-200'
					}`}
				>
					{post.prompt.length > 90
						? `${post.prompt.substring(0, 90)}...`
						: post.prompt}
				</p>
				<p
					className="mt-3 text-sm text-blue-600 cursor-pointer"
					onClick={() => handleTagClicked && handleTagClicked(post.tag)}
				>
					#{post.tag}
				</p>
			</div>
			{post.creator._id === session?.user?.id &&
				pathname === `/profile/${session?.user?.id}` && (
					<div className="mt-5 flex-center gap-5">
						<Link href={`/update-prompt?id=${post._id}`}>
							<span className="text-sm text-gray-500 font-inter font-semibold hover:text-blue-600 cursor-pointer">
								Edit
							</span>
						</Link>
						<span
							className="text-sm text-gray-500 font-inter font-semibold hover:text-red-600 cursor-pointer"
							onClick={handleDelete}
						>
							Delete
						</span>
					</div>
				)}
		</div>
	);
};

export default PromptCard;
