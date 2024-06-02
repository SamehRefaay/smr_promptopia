import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Promptopia',
	description: 'Discover & Share AI Prompts',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>

					<main className="app">
						<Navbar />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
}
