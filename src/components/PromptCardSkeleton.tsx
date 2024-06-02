import React from 'react';

const PromptCardSkeleton = () => {
	return (
		<div className="w-full relative shadow-md bg-white p-5">
			<div className="flex justify-between item-start">
				<div className="w-full flex justify-start items-center gap-3">
					<div className="w-9 h-9 bg-slate-200" />
					<div className="w-full">
						<h3 className="w-[50%] h-4 bg-slate-200"></h3>
						<p className="mt-2 w-1/2 h-4 bg-slate-200"></p>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<p className="w-full h-10 bg-slate-200"></p>
				<p className="mt-4 w-1/4 h-4 bg-slate-200"></p>
			</div>
		</div>
	);
};

export default PromptCardSkeleton;
