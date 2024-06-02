import ProfilePrompts from '@/components/ProfilePrompts';
import ProfileInfo from '@/components/ProfileInfo';

const fetchUserPrompts = async (userId: string) => {
	const response = await fetch(
		`${process.env.BASE_URL}/api/prompt/users/${userId}/posts`,
		{ cache: 'no-store' }
	);

	if (!response.ok) {
		throw new Error('Something went wrong!');
	}

	return response.json();
};

const ProfilePage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const posts = await fetchUserPrompts(id);

	return (
		<section className="w-full flex flex-col gap-5">
			<ProfileInfo userId={id} />
			<ProfilePrompts name="my" posts={posts} />
		</section>
	);
};

export default ProfilePage;
