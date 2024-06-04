'use client';
import ProfilePrompts from '@/components/ProfilePrompts';
import ProfileInfo from '@/components/ProfileInfo';
import { useEffect, useState } from 'react';
import { PostProps } from '@/utils/types';

const ProfilePage = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const [userPosts, setUserPosts] = useState<PostProps[]>([]);

	const fetchUserPrompts = async () => {
		try {
			const response = await fetch(`/api/prompt/users/${id}/posts`, {
				cache: 'no-store',
			});
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const data = await response.json();
			setUserPosts(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchUserPrompts();
	}, []);

	return (
		<section className="w-full flex flex-col gap-5">
			<ProfileInfo userId={id} />
			<ProfilePrompts name="my" posts={userPosts} />
		</section>
	);
};

export default ProfilePage;
