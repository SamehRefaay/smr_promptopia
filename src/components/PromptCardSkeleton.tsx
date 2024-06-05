import React from 'react';

const PromptCardSkeleton = ({ mode }: { mode: string }) => {
	return (
		<div
			className={`w-full relative shadow-md p-5 ${
				mode === 'light' ? 'bg-white' : 'bg-[#111]'
			}`}
		>
			<div className="flex justify-between item-start">
				<div className="w-full flex justify-start items-center gap-3">
					<div
						className={`w-9 h-9 ${
							mode === 'light' ? 'bg-gray-300' : 'bg-gray-800'
						}`}
					/>
					<div className="w-full">
						<h3
							className={`w-[50%] h-4 ${
								mode === 'light' ? 'bg-gray-300' : 'bg-gray-800'
							}`}
						></h3>
						<p
							className={`mt-2 w-1/2 h-4 ${
								mode === 'light' ? 'bg-gray-300' : 'bg-gray-800'
							}`}
						></p>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<p
					className={`w-full h-10 ${
						mode === 'light' ? 'bg-gray-300' : 'bg-gray-800'
					}`}
				></p>
				<p
					className={`mt-4 w-1/4 h-4 ${
						mode === 'light' ? 'bg-gray-300' : 'bg-gray-800'
					}`}
				></p>
			</div>
		</div>
	);
};

export default PromptCardSkeleton;
