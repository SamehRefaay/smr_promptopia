import { connectToDB } from '@/utils/database';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export const POST = async (req: NextRequest) => {
	const { name, email, password } = await req.json();

	try {
		await connectToDB();
		const existingUser = await User.findOne({ email: email });

		if (!existingUser) {
			const hashedPassword = await bcrypt.hash(password, 10);

			await User.create({
				name,
				email,
				username: email?.split('@')[0],
				password: hashedPassword,
			});
			return new NextResponse('User has been created!', { status: 201 });
		}
	} catch (error: any) {
		return new NextResponse(error.message, { status: 500 });
	}
};
