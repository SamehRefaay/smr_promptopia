export interface UserProps {
	_id: string;
	email: string;
	username: string;
	name: string;
	image: string;
}
export interface PostProps {
	_id: string;
	creator: UserProps;
	prompt: string;
	tag: string;
}
