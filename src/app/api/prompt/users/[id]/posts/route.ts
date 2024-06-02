import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		await connectToDB();

		const userPosts = await Prompt.find({ creator: params.id }).populate(
			'creator'
		);

		return new Response(JSON.stringify(userPosts), { status: 200 });
	} catch (error) {
		return new Response('Failed to fetch user posts', { status: 500 });
	}
};
