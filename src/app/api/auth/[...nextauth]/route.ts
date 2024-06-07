import User from '@/models/user';
import { connectToDB } from '@/utils/database';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';
import { AuthOptions } from 'next-auth';

const authOptions: AuthOptions = {
	pages: {
		signIn: '/dashboard/login',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'Email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				// check if the user exist
				await connectToDB();
				try {
					const user = await User.findOne({
						email: credentials?.email,
					});

					if (user && credentials) {
						const isPasswordCorrect = await bcrypt.compare(
							credentials.password,
							user.password
						);

						if (isPasswordCorrect) {
							return user;
						} else {
							throw new Error('Wrong Credentials!');
						}
					} else {
						throw new Error('User not found!');
					}
				} catch (err: any) {
					throw new Error(err.message);
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	callbacks: {
		async session({ session }: { session: any }) {
			const sessionUser = await User.findOne({
				email: session.user?.email,
			});

			session.user.id = sessionUser._id.toString();

			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
