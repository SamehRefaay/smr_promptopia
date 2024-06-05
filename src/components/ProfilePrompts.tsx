'use client';
import { PostProps } from '@/utils/types';
import Link from 'next/link';
import PromptCard from './PromptCard';

import useSWR from 'swr';
import { notFound } from 'next/navigation';
import FeedSkeleton from '@/components/FeedSkeleton';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../types/theme';

interface Props {
	userId: string;
}

const ProfilePrompts = ({ userId }: Props) => {
	const { mode } = useContext(ThemeContext) as ThemeContextType;

	const fetcher = (...args: Parameters<typeof fetch>) =>
		fetch(...args).then(res => res.json());

	const {
		data,
		error,
		isLoading,
	}: { data: PostProps[]; error: any; isLoading: boolean } = useSWR(
		`/api/prompt/users/${userId}/posts`,
		fetcher
	);

	if (error) return notFound();

	if (isLoading) return <FeedSkeleton mode={mode} search={false} items={3} />;
	return (
		<div>
			{data.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{data.map(post => (
						<PromptCard key={post._id} post={post} />
					))}
				</div>
			) : (
				<p className="text-sm text-gray-400 font-inter font-medium">
					Sorry you do not have any prompt.{' '}
					<Link href="/create-prompt">
						<span className="blue_gradient">create one</span> now.
					</Link>
				</p>
			)}
		</div>
	);
};

export default ProfilePrompts;
