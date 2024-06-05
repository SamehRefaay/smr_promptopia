import React from 'react';

const ProfileInfoSkeleton = ({ mode }: { mode: string }) => {
	return (
		<div className="grid gap-5 grid-cols-1 md:grid-cols-3">
			<div
				className={`w-full p-5 shadow-md ${
					mode === 'light' ? 'bg-white' : 'bg-[#111]'
				} grid place-content-center`}
			>
				<div className="w-full text-center">
					<div
						className={`w-[200px] h-[200px] rounded-full mx-auto ${
							mode === 'light' ? 'bg-gray-200' : 'bg-gray-800'
						} `}
					></div>
					<h1
						className={`mt-2 w-[150px] h-5 mx-auto ${
							mode === 'light' ? 'bg-gray-200' : 'bg-gray-800'
						}`}
					></h1>
					<p
						className={`mt-2 w-[220px] h-5 mx-auto ${
							mode === 'light' ? 'bg-gray-200' : 'bg-gray-800'
						}`}
					></p>
					<div className={`flex gap-2 mt-4`}>
						<div
							className={`w-32 h-10 rounded-lg ${
								mode === 'light' ? 'bg-gray-200' : 'bg-gray-800'
							}`}
						></div>
						<button
							className={`w-32 h-10 rounded-lg ${
								mode === 'light' ? 'bg-gray-200' : 'bg-gray-800'
							}`}
						></button>
					</div>
				</div>
			</div>
			<div className="md:col-span-2 p-5">
				<h2
					className={`w-24 h-6 ${
						mode === 'light' ? 'bg-gray-200' : 'bg-gray-700'
					}`}
				></h2>
				<p
					className={`mt-5 h-[180px] ${
						mode === 'light' ? 'bg-gray-200' : 'bg-gray-700'
					} font-inter`}
				></p>
			</div>
		</div>
	);
};

export default ProfileInfoSkeleton;
