'use client';
import Form from '@/components/Form';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UpdatePrompt = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [post, setPost] = useState<any>();
	const promptId = searchParams.get('id');

	useEffect(() => {
		const fetchPromptById = async (id: string) => {
			const response = await fetch(`/api/prompt/${id}`);
			if (!response.ok) console.log('Something went wrong!');
			const data = await response.json();
			setPost(data);
		};

		if (promptId) fetchPromptById(promptId!);
	}, [promptId]);

	const handleUpdate = async (e: Event) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (!promptId) alert('Missing PromptId!');

		try {
			const response = await fetch(`/api/prompt/${promptId}`, {
				method: 'PATCH',
				body: JSON.stringify({
					prompt: post.prompt,
					tag: post.tag,
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
				type="Update"
				post={post}
				setPost={setPost}
				isSubmitting={isSubmitting}
				handleSubmit={handleUpdate}
			/>
		</section>
	);
};

export default UpdatePrompt;
