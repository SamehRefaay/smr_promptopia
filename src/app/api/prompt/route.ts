import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	try {
		await connectToDB();
		const posts = await Prompt.find({}).populate('creator');

		return new Response(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return NextResponse.json('Failed to fetch all prompts', { status: 500 });
	}
};
