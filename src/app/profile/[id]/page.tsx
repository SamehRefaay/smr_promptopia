import ProfilePrompts from '@/components/ProfilePrompts';
import ProfileInfo from '@/components/ProfileInfo';

const ProfilePage = ({ params }: { params: { id: string } }) => {
	return (
		<section className="w-full flex flex-col gap-5">
			<ProfileInfo userId={params.id} />
			<ProfilePrompts userId={params.id} />
		</section>
	);
};

export default ProfilePage;
