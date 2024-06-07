'use client';
import Divider from '@/components/Divider';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdPricetag } from 'react-icons/io';
import { MdCreditCardOff, MdCancelPresentation } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import FormButton from '@/components/FormButton';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
	const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const name = e.target[0].value + ' ' + e.target[1].value;
		const email = e.target[2].value;
		const password = e.target[3].value;

		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, password }),
			});

			res.status === 201 &&
				router.push('/dashboard/login?success=Account has been created');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="grid  grid-cols-1 md:grid-cols-2">
			<div className="flex p-10 flex-col gap-10 bg-gradient-to-r from-orange-600 to-yellow-400">
				<h1 className="text-5xl text-white">The Choice of a new generation.</h1>
				<ul className="flex flex-col gap-4">
					<li className="flex items-center gap-4  text-2xl">
						<IoMdPricetag className="text-gray-200" />
						<span className="text-gray-200">It&apos;s Free.</span>
					</li>
					<li className="flex items-center gap-4  text-2xl">
						<MdCreditCardOff className="text-gray-200" />
						<span className="text-gray-200">No Credit Card.</span>
					</li>
					<li className="flex items-center gap-4  text-2xl">
						<MdCancelPresentation className="text-gray-200" />
						<span className="text-gray-200">Cancel Anytime. .</span>
					</li>
				</ul>
			</div>
			<div className="w-full py-10 border bg-white">
				<h2 className="text-3xl font-bold font-satoshi text-center">
					{' '}
					Get Started!
				</h2>
				<p className="mt-5 text-lg text-gray-500 text-center">
					Use your social profile to register
				</p>
				<div className=" w-96 mx-auto">
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
					<form onSubmit={handleSubmit}>
						<div className="flex gap-5">
							<input
								className="f_input"
								type="text"
								placeholder="First Name"
								required
							/>
							<input
								className="f_input"
								type="text"
								placeholder="Last Name"
								required
							/>
						</div>
						<input
							className="f_input"
							type="text"
							placeholder="Email"
							required
						/>
						<input
							className="f_input"
							type="password"
							placeholder="Password"
							required
						/>

						<div className="mt-5 flex gap-4 items-center">
							<input
								className=" w-4 h-4"
								type="checkbox"
								checked={acceptTerms}
								name="rules"
								onChange={() => setAcceptTerms(prev => !prev)}
							/>
							<p className="text-sm">
								I agree to the{' '}
								<Link className="underline" href="#">
									Terms & Conditions
								</Link>{' '}
								and <Link href="#">Privacy</Link>
								Policy
							</p>
						</div>
						<FormButton className="bg-blue-600 text-white">Register</FormButton>
						<p className="mt-5">
							Already have an account?{' '}
							<Link href={'/dashboard/login'}>
								<span className="text-blue-500">Login</span>
							</Link>{' '}
							here
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
