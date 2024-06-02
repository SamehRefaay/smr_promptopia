import User from '@/models/user';
import { connectToDB } from '@/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	try {
		await connectToDB();

		const users = await User.find({}).populate('_id');

		return new NextResponse(JSON.stringify(users), { status: 200 });
	} catch (error) {
		return new NextResponse('Failed to fetch all users.', { status: 500 });
	}
};
