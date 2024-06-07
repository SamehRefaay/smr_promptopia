'use client';
import Divider from '@/components/Divider';
import FormButton from '@/components/FormButton';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
	const session = useSession();
	const router = useRouter();
	const params = useSearchParams();
	const [error, setError] = useState<string | null>('');
	const [success, setSuccess] = useState<string | null>('');
	const [rememberPassword, setRememberPassword] = useState<boolean>(false);

	useEffect(() => {
		setError(params.get('error'));
		setSuccess(params.get('success'));
	}, [params]);

	if (session.status === 'loading') return <div>Loading...</div>;

	if (session.status === 'authenticated') router?.push('/');

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			email: { value: string };
			password: { value: string };
		};

		const email = target.email.value;
		const password = target.password.value;

		signIn('credentials', { email, password });
	};

	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-2">
			<div className="w-full py-10 border bg-white">
				<h2 className="text-3xl font-bold font-satoshi text-center">Login</h2>
				<p className="mt-5 text-lg text-gray-500 text-center">
					Use your social profile to login
				</p>
				<div className=" w-96 mx-auto">
					<form onSubmit={handleSubmit}>
						<div className="flex gap-4">
							<FormButton
								className=""
								style="outline"
								onClick={() => signIn('google')}
							>
								<div className="flex justify-center items-center gap-1">
									<FcGoogle size={24} />
									<span className=" text-base">Google</span>
								</div>
							</FormButton>
							<FormButton className="w-full bg-[#111] text-white">
								<div className="flex justify-center items-center gap-1">
									<FaGithub size={24} />
									<span className=" text-base ">GitHub</span>
								</div>
							</FormButton>
						</div>
						<Divider className="mt-2" text="Or" />
						<input
							className="f_input"
							type="text"
							placeholder="Email"
							name="email"
							required
						/>
						<input
							className="f_input"
							type="password"
							placeholder="Password"
							name="password"
							required
						/>

						<FormButton className="bg-blue-600 text-white" type="submit">
							Login
						</FormButton>
						<div className="mt-5 flex items-center justify-between text-sm text-gray-600">
							<div className="flex gap-2 items-center">
								<input
									className="w-4 h-4"
									type="checkbox"
									checked={rememberPassword}
									name="rules"
									onChange={() => setRememberPassword(prev => !prev)}
								/>
								<p className="text-sm">Remember password</p>
							</div>
							<Link href="#">Forget Password</Link>
						</div>
					</form>
				</div>
			</div>

			<div className="w-full min-h-[500px] bg-gradient-to-r from-orange-600 to-yellow-400 grid place-content-center">
				<div className="text-center text-white">
					<h1 className="text-5xl font-bold">Welcome to login</h1>
					<p className="mt-5">Don&apos;t have an account?</p>
					<Link
						className="block w-[100px] mx-auto mt-5 border-[1px] border-white rounded-3xl py-2.5 px-5 hover:bg-white hover:text-gray-900"
						href={'/dashboard/register'}
					>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default function SignInPage() {
	return (
		<Suspense fallback={'Loading...'}>
			<LoginPage />
		</Suspense>
	);
}
