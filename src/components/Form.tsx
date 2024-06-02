import { PostProps } from '@/utils/types';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
	type: string;
	post: any;
	setPost: Dispatch<SetStateAction<any>>;
	isSubmitting: boolean;
	handleSubmit: any;
}

const Form = ({ type, post, setPost, isSubmitting, handleSubmit }: Props) => {
	return (
		<div className="w-full max-w-full flex-col flex-start">
			<h1 className="text_head text-left">
				<span className="blue_gradient">{type} Prompt</span>
			</h1>
			<p className="desc text-left max-w-md">
				{type} and share amazing prompts with the world, and let your
				imagination run wild with any Ai-powered platform.
			</p>
			<form
				onSubmit={handleSubmit}
				className="w-full lg:w-1/2 mt-5 flex flex-col gap-7 glassmorphism"
			>
				<label className="w-full flex-col gap-3 w-max-md">
					<span className="font-satoshi font-semibold text-base text-gray-700">
						Prompt:
					</span>
					<textarea
						className="form_textarea"
						placeholder="write your prompt here"
						value={post?.prompt}
						onChange={e => setPost({ ...post, prompt: e.target.value })}
					/>
				</label>
				<label className="w-full flex-col gap-3 w-max-md">
					<span className="font-satoshi font-semibold text-base text-gray-700">
						Tag:(#product, #web_development, #idea, etc)
					</span>
					<input
						className="form_input"
						type="text"
						placeholder="#tag"
						value={post?.tag}
						onChange={e => setPost({ ...post, tag: e.target.value })}
					/>
				</label>
				<button disabled={isSubmitting} type="submit" className="">
					{isSubmitting ? `${type}ing...` : type}
				</button>
			</form>
		</div>
	);
};

export default Form;
