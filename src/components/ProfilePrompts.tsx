import { PostProps } from '@/utils/types';
import Link from 'next/link';
import PromptCard from './PromptCard';

interface Props {
	name: string;
	posts: PostProps[];
}

const ProfilePrompts = ({ name, posts }: Props) => {
	return (
		<div>
			{!posts ? (
				<p className="text-sm text-gray-400 font-inter font-medium">
					Sorry you do not have any prompt.{' '}
					<Link href="/create-prompt">
						<span className="blue_gradient">create one</span> now.
					</Link>
				</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{posts.map(post => (
						<PromptCard key={post._id} post={post} />
					))}
				</div>
			)}
		</div>
	);
};

export default ProfilePrompts;
