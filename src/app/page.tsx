import Feed from '@/components/Feed';

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

			<Feed />
		</section>
	);
}
