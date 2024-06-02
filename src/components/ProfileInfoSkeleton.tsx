import React from 'react';

const ProfileInfoSkeleton = () => {
	return (
		<div className="grid gap-5 grid-cols-1 md:grid-cols-3">
			<div className="w-full p-5 shadow-md bg-white grid place-content-center">
				<div className="w-full text-center">
					<div className="w-[200px] h-[200px] bg-gray-200 rounded-full mx-auto"></div>
					<h1 className="mt-2 w-[150px] h-5 mx-auto bg-gray-200"></h1>
					<p className="mt-2 w-[220px] h-5 mx-auto bg-gray-200"></p>
					<div className="flex gap-1 mt-4">
						<div className="w-32 h-10 rounded-lg bg-gray-200"></div>
						<button className="w-32 h-10 rounded-lg bg-gray-200"></button>
					</div>
				</div>
			</div>
			<div className="md:col-span-2 p-5">
				<h2 className="w-24 h-6 bg-gray-200"></h2>
				<p className="mt-5 h-[180px] bg-gray-200 font-inter"></p>
			</div>
		</div>
	);
};

export default ProfileInfoSkeleton;
