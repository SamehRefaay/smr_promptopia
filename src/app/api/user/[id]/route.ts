import User from '@/models/user';
import { connectToDB } from '@/utils/database';
import { NextResponse } from 'next/server';

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		await connectToDB();
		const user = await User.findById(params.id);
		if (!user) return new NextResponse('User Not Found', { status: 404 });

		return new NextResponse(JSON.stringify(user), { status: 200 });
	} catch (error) {}
	return new NextResponse('Failed to fetch user data.', { status: 500 });
};
