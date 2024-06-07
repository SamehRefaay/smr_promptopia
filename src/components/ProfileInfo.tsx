'use client';
import { UserProps } from '@/utils/types';
import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../types/theme';
import useSWR from 'swr';
import { notFound } from 'next/navigation';
import ProfileInfoSkeleton from './ProfileInfoSkeleton';

const ProfileInfo = ({ userId }: { userId: string }) => {
	const { mode } = useContext(ThemeContext) as ThemeContextType;

	const fetcher = (...args: Parameters<typeof fetch>) =>
		fetch(...args).then(res => res.json());

	const {
		data,
		error,
		isLoading,
	}: { data: UserProps; error: any; isLoading: boolean } = useSWR(
		`/api/user/${userId}`,
		fetcher
	);

	if (error) return notFound();

	if (isLoading) return <ProfileInfoSkeleton mode={mode} />;

	return (
		<div className="grid gap-5 grid-cols-1 md:grid-cols-3">
			<div
				className={`w-full p-5 shadow-md ${
					mode === 'light' ? 'bg-white' : 'bg-[#111]'
				}  grid place-content-center rounded-md`}
			>
				<div className="text-center">
					{data?.image ? (
						<Image
							className="rounded-full mx-auto"
							src={data?.image}
							alt="profile image"
							width={200}
							height={200}
						/>
					) : (
						<div className="w-[200px] h-[200px] mx-auto bg-blue-600 rounded-full text-white flex-center text-7xl font-bold">
							{data?.email[0]}
						</div>
					)}
					<h1
						className={`text-xl ${
							mode === 'light' ? 'text-gray-900' : 'text-gray-100'
						} font-bold font-satoshi`}
					>
						{data?.name}
					</h1>
					<p className="text-sm text-gray-400 font-inter">{`@${data?.username}`}</p>
					<p className="text-sm text-gray-400 font-inter">{data?.email}</p>
					<div className="flex gap-2 mt-4">
						<button
							className={`w-32 h-10 rounded-lg flex-center border-[1px] hover:text-gray-100 hover:border-none  ${
								mode === 'light'
									? 'border-gray-900 bg-white text-gray-900 hover:bg-[#111]'
									: 'border-gray-100 bg-[#111] text-gray-100 hover:bg-orange-500'
							}`}
						>
							Follow
						</button>
						<button
							className={`w-32 h-10 rounded-lg flex-center border-[1px] hover:text-gray-100 hover:border-none  ${
								mode === 'light'
									? 'border-gray-900 bg-white text-gray-900 hover:bg-[#111]'
									: 'border-gray-100 bg-[#111] text-gray-100 hover:bg-blue-500'
							}`}
						>
							Message
						</button>
					</div>
				</div>
			</div>
			<div className="md:col-span-2 p-5 rounded-md bg-gray-500 bg-opacity-30">
				<h2 className="text-xl font-satoshi font-semibold">About me</h2>
				<p
					className={`mt-5 text-base font-medium leading-loose text-justify font-inter ${
						mode === 'light' ? 'text-gray-800' : 'text-gray-100'
					} `}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut,
					natus similique ex non facere quibusdam eveniet suscipit rerum
					architecto voluptatum explicabo maxime exercitationem omnis quasi sunt
					laboriosam possimus! Eaque. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dolore, earum quaerat veniam debitis asperiores
					saepe, voluptatem fuga inventore omnis excepturi incidunt! Sapiente
					eligendi officiis error dolorum velit porro ratione amet?
				</p>
			</div>
		</div>
	);
};

export default ProfileInfo;
