import { UserProps } from '@/utils/types';
import Image from 'next/image';
import React from 'react';

const fetchUserData = async (userId: string) => {
	const response = await fetch(`${process.env.BASE_URL}/api/user/${userId}`, {
		cache: 'no-store',
	});

	if (!response.ok) {
		throw new Error('Something went wrong!');
	}

	return response.json();
};

const ProfileInfo = async ({ userId }: { userId: string }) => {
	const user: UserProps = await fetchUserData(userId);

	return (
		<div className="grid gap-5 grid-cols-1 md:grid-cols-3">
			<div className="w-full p-5 shadow-md bg-white grid place-content-center">
				<div className="text-center">
					<Image
						className="rounded-full mx-auto"
						src={user.image}
						alt="profile image"
						width={200}
						height={200}
					/>
					<h1 className="text-xl text-gray-900 font-bold font-satoshi">
						{user?.name}
					</h1>
					<p className="text-sm text-gray-400 font-inter">{`@${user?.username}`}</p>
					<p className="text-sm text-gray-400 font-inter">{user?.email}</p>
					<div className="flex gap-1 mt-4">
						<button className="w-32 h-10 rounded-lg flex-center border-[1px] border-black hover:border-none hover:bg-black hover:text-white">
							Follow
						</button>
						<button className="w-32 h-10 rounded-lg flex-center border-[1px] border-black hover:border-none hover:bg-black hover:text-white">
							Message
						</button>
					</div>
				</div>
			</div>
			<div className="md:col-span-2 p-5">
				<h2 className="text-xl font-satoshi font-semibold">About me</h2>
				<p className="mt-5 text-gray-400 font-inter">
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
