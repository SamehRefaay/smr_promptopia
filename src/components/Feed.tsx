'use client';
import PromptCard from './PromptCard';
import { PostProps } from '@/utils/types';
import { useContext, useEffect, useState } from 'react';
import { clearTimeout, setTimeout } from 'timers';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../types/theme';

const Feed = () => {
	const [allPosts, setAllPosts] = useState<PostProps[]>([]);
	const [searchText, setSearchText] = useState('');
	const [searchTimeout, setSearchTimeout] = useState<any>();
	const [searchedResult, setSearchedResult] = useState<PostProps[]>([]);
	const { mode } = useContext(ThemeContext) as ThemeContextType;

	const fetchPosts = async () => {
		try {
			const response = await fetch(`/api/prompt`, {
				cache: 'no-store',
			});
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const data = await response.json();
			setAllPosts(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchPosts();
	}, []);

	const filterPosts = (searchText: string) => {
		const regex = new RegExp(searchText, 'i');

		const filteredPosts: PostProps[] = allPosts.filter(
			item =>
				regex.test(item?.creator?.username) ||
				regex.test(item?.prompt) ||
				regex.test(item?.tag)
		);

		return filteredPosts;
	};

	const handleSearch = (e: any) => {
		e.preventDefault();
		clearTimeout(searchTimeout);
		setSearchText(e.target.value);

		//debounce method
		setSearchTimeout(
			setTimeout(() => {
				const searchResult = filterPosts(e.target.value);
				setSearchedResult(searchResult);
			}, 500)
		);
	};

	const handleTagClicked = (tag: string) => {
		setSearchText(tag);
		const searchResult = filterPosts(tag);
		setSearchedResult(searchResult);
	};

	return (
		<section className="w-full">
			<form>
				<input
					type="text"
					placeholder="Search for tag or username"
					className={`${
						mode === 'light'
							? 'search_input feed mt-10'
							: 'search_input_dark feed'
					}`}
					value={searchText}
					onChange={handleSearch}
					required
				/>
			</form>
			<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{searchText
					? searchedResult.map(post => (
							<PromptCard
								key={post._id}
								post={post}
								handleTagClicked={handleTagClicked}
							/>
					  ))
					: allPosts.map(post => (
							<PromptCard
								key={post._id}
								post={post}
								handleTagClicked={handleTagClicked}
							/>
					  ))}
			</div>
		</section>
	);
};
export default Feed;
