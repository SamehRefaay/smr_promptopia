'use client';
import { useState } from 'react';
import Form from '@/components/Form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CreatePost = () => {
	const router = useRouter();
	const { data: session }: { data: any } = useSession();

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [post, setPost] = useState({ prompt: '', tag: '' });

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const response = await fetch('/api/prompt/new', {
				method: 'POST',
				body: JSON.stringify({
					userId: session?.user.id,
					prompt: post.prompt,
					tag: post.tag.replace(' ', '_').toLowerCase(),
				}),
			});

			if (response.ok) {
				router.push('/');
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="w-full">
			<Form
				type="Create"
				post={post}
				setPost={setPost}
				isSubmitting={isSubmitting}
				handleSubmit={handleSubmit}
			/>
		</section>
	);
};

export default CreatePost;
