import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		await connectToDB();
		const prompt = await Prompt.findById(params.id);
		if (!prompt) return new NextResponse('Prompt Not Found', { status: 404 });

		return new NextResponse(JSON.stringify(prompt), { status: 200 });
	} catch (error) {}
	return new NextResponse('Failed to fetch certain prompt.', { status: 500 });
};

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	const { prompt, tag } = await req.json();

	try {
		await connectToDB();
		let existingPrompt = await Prompt.findById(params.id);
		if (!existingPrompt)
			return new NextResponse('Prompt Not Found', { status: 404 });

		existingPrompt.prompt = prompt;
		existingPrompt.tag = tag.replace(' ', '_').toLowerCase();
		await existingPrompt.save();

		return new NextResponse('Prompt has been updated successfully!', {
			status: 200,
		});
	} catch (error) {}
	return new NextResponse('Failed to update the prompt.', { status: 500 });
};

export const DELETE = async (
	req: NextRequest,
	{ params }: { params: { id: string } }
) => {
	try {
		await connectToDB();
		await Prompt.findByIdAndDelete(params.id);
		return new NextResponse(
			`Prompt with id ${params.id} was deleted successfully!`,
			{ status: 200 }
		);
	} catch (error) {
		return new NextResponse(`Failed to delete the prompt.`, { status: 500 });
	}
};
