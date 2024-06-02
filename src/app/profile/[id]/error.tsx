'use client';

import Link from 'next/link';

const error = () => {
	return (
		<section className="w-full h-[600px] grid place-content-center text-center">
			<div className="p-10 bg-white shadow-md">
				<h1 className="text-7xl font-bold font-inter text-red-500">Sorry</h1>
				<p className="my-10 text-4xl font-bold font-inter text-red-300">
					Something went wrong!
				</p>
				<Link href={'/'} className="blue_gradient text-2xl font-bold p-4">
					Go Home
				</Link>
			</div>
		</section>
	);
};

export default error;
