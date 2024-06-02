import Feed from '@/components/Feed';
import { Suspense } from 'react';
import FeedSkeleton from '@/components/FeedSkeleton';

export default function Home() {
	return (
		<section className="w-full flex-center flex-col ">
			<h1 className="head_text text-center">Discover & Share</h1>
			<span className="orange_gradient text-4xl font-bold text-center">
				AI-Powered Prompts
			</span>
			<p className="desc text-center">
				Promptopia is an open-source AI prompting tool for modern world to
				discover, create and share creative prompts
			</p>
			<Suspense fallback={<FeedSkeleton items={6} />}>
				<Feed />
			</Suspense>
		</section>
	);
}
