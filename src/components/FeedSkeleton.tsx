import React from 'react';
import PromptCardSkeleton from './PromptCardSkeleton';

const FeedSkeleton = ({ items }: { items: number }) => {
	return (
		<section className="animate-pulse duration-300 mt-10 w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{[...Array(items)].map((_, i) => (
					<PromptCardSkeleton key={i} />
				))}
			</div>
		</section>
	);
};

export default FeedSkeleton;

/*


*/
