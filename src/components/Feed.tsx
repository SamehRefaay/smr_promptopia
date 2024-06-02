import React from 'react';
import PromptCard from './PromptCard';
import { PostProps } from '@/utils/types';
import { revalidateTag } from 'next/cache';

const fetchPosts = async () => {
	try {
		const response = await fetch(`${process.env.BASE_URL}/api/prompt`, {
			cache: 'no-store',
		});
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		return response.json();
	} catch (error) {
		console.log(error);
	}
};

const Feed = async () => {
	const posts: PostProps[] = await fetchPosts();
	return (
		<section className="w-full">
			<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts.length > 0 &&
					posts.map(post => <PromptCard key={post._id} post={post} />)}
			</div>
		</section>
	);
};

export default Feed;
