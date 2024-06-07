import React, { ButtonHTMLAttributes } from 'react';

interface Props {
	className: string;
	style?: string;
	type?: 'submit' | 'reset' | 'button' | undefined;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const FormButton = ({ className, style, type, children, onClick }: Props) => {
	return (
		<button
			className={`mt-4 w-full rounded-md border ${
				style === 'outline' ? 'border-gray-300 bg-transparent' : 'border-none'
			}  ${className} py-2.5 font-satoshi pl-5 pr-12 text-sm font-medium bg-opacity-90 hover:bg-opacity-100`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default FormButton;
