import FeedSkeleton from '@/components/FeedSkeleton';
import ProfileInfoSkeleton from '@/components/ProfileInfoSkeleton';

const loading = () => {
	return (
		<section className="w-full flex flex-col gap-5">
			<ProfileInfoSkeleton />
			<FeedSkeleton items={3} />
		</section>
	);
};

export default loading;
