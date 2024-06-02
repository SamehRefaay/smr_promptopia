'use client';
import '@/styles/globals.css';
import React, { useEffect, useState } from 'react';
import '@/styles/globals.css';
import {
	ClientSafeProvider,
	LiteralUnion,
	getProviders,
	signIn,
	signOut,
	useSession,
} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/images/logo.svg';
import { BuiltInProviderType } from 'next-auth/providers/index';

const Navbar = () => {
	const { data: session }: any = useSession();
	const [toggleDropdown, setToggleDropdown] = useState(false);
	const [providers, setProviders] = useState<Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null>(null);
	useEffect(() => {
		const setUpProviders = async () => {
			const response = await getProviders();
			setProviders(response);
		};

		setUpProviders();
	}, []);

	return (
		<div className="w-full flex-between gap-2 mb-16 mt-3">
			<Link className="flex-center gap-2" href="/">
				<Image
					src={logo}
					alt="logo"
					width={30}
					height={30}
					className="object-contain"
				/>
				<p className="logo_text">Promptopia</p>
			</Link>

			{/* Desktop Navigation */}
			<div className="hidden sm:flex">
				{session?.user ? (
					<div className="flex gap-3 md:gap-5">
						<Link className="black_btn" href="/create-prompt">
							Create Post
						</Link>
						<button
							type="button"
							className="outline_btn"
							onClick={() => signOut()}
						>
							Sign out
						</button>
						<Link href={`/profile/${session.user.id}`}>
							<Image
								src={session?.user?.image!}
								alt="profile"
								width={37}
								height={37}
								className="object-contain rounded-full"
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map(provider => (
								<button
									key={provider?.name}
									type="button"
									className="outline_btn"
									onClick={() => signIn(provider.id)}
								>
									{`Sign in with ${provider?.name}`}
								</button>
							))}
					</>
				)}
			</div>
			{/* mobile Navigation */}
			<div className="sm:hidden flex relative">
				{session?.user ? (
					<div className="flex">
						<Image
							src={session?.user?.image!}
							alt="profile"
							width={37}
							height={37}
							className="rounded-full"
							onClick={() => setToggleDropdown(prev => !prev)}
						/>

						{toggleDropdown && (
							<div className="dropdown">
								<Link className="dropdown_link" href="/profile/me">
									My Profile
								</Link>
								<Link className="dropdown_link" href="/create-prompt">
									Create Prompt
								</Link>
								<button
									type="button"
									className="outline_btn"
									onClick={() => signOut()}
								>
									Sign Out
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map(provider => (
								<button
									key={provider?.name}
									type="button"
									className="outline_btn"
									onClick={() => signIn(provider.id)}
								>
									{`Sign in with ${provider?.name}`}
								</button>
							))}
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
