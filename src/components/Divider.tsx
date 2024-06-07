import React from 'react';

const Divider = ({ className, text }: { className: string; text: string }) => {
	return (
		<div className={`flex items-center gap-4 ${className}`}>
			<div className="w-full h-[1px] bg-gray-300 "></div>
			<span className="text-gray-500">{text}</span>
			<div className="w-full h-[1px] bg-gray-300 "></div>
		</div>
	);
};

export default Divider;
