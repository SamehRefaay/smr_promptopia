import React from 'react';
import PromptCardSkeleton from './PromptCardSkeleton';

interface Props {
	mode: string;
	search: boolean;
	items: number;
}

const FeedSkeleton = ({ mode, search, items }: Props) => {
	console.log('mode:', mode);
	return (
		<section className="w-full">
			{search && (
				<form>
					<input
						type="text"
						placeholder="Search for tag or username"
						className="search_input feed"
						required
					/>
				</form>
			)}
			<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse duration-300">
				{[...Array(items)].map((_, i) => (
					<PromptCardSkeleton mode={mode} key={i} />
				))}
			</div>
		</section>
	);
};

export default FeedSkeleton;

/*


*/
