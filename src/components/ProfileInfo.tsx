'use client';
import { UserProps } from '@/utils/types';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../types/theme';

const ProfileInfo = ({ userId }: { userId: string }) => {
	const [user, setUser] = useState<any>();
	const { mode } = useContext(ThemeContext) as ThemeContextType;

	const fetchUserData = async () => {
		try {
			const response = await fetch(`/api/user/${userId}`, {
				cache: 'no-store',
			});
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const data = await response.json();
			setUser(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchUserData();
	}, []);
	return (
		user && (
			<div className="grid gap-5 grid-cols-1 md:grid-cols-3">
				<div
					className={`w-full p-5 shadow-md ${
						mode === 'light' ? 'bg-white' : 'bg-[#111]'
					}  grid place-content-center rounded-md`}
				>
					<div className="text-center">
						<Image
							className="rounded-full mx-auto"
							src={user?.image}
							alt="profile image"
							width={200}
							height={200}
						/>
						<h1
							className={`text-xl ${
								mode === 'light' ? 'text-gray-900' : 'text-gray-100'
							} font-bold font-satoshi`}
						>
							{user?.name}
						</h1>
						<p className="text-sm text-gray-400 font-inter">{`@${user?.username}`}</p>
						<p className="text-sm text-gray-400 font-inter">{user?.email}</p>
						<div className="flex gap-1 mt-4">
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
						ut, natus similique ex non facere quibusdam eveniet suscipit rerum
						architecto voluptatum explicabo maxime exercitationem omnis quasi
						sunt laboriosam possimus! Eaque. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Dolore, earum quaerat veniam debitis
						asperiores saepe, voluptatem fuga inventore omnis excepturi
						incidunt! Sapiente eligendi officiis error dolorum velit porro
						ratione amet?
					</p>
				</div>
			</div>
		)
	);
};

export default ProfileInfo;
