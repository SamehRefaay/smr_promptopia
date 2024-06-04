/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'img.freepik.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
