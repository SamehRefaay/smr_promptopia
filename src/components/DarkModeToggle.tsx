import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../types/theme';

const DarkModeToggle = () => {
	const { mode, toggle } = useContext(ThemeContext) as ThemeContextType;

	return (
		<div
			className={`relative flex items-center justify-between p-1 w-12 h-6 border-[1px] ${
				mode === 'light' ? 'border-gray-700' : 'border-gray-200'
			} rounded-xl cursor-pointer`}
			onClick={toggle}
		>
			<div className="text-sm">🌙</div>
			<div className="text-sm">☀</div>
			<div
				className={`absolute ${
					mode === 'light' ? 'left-1' : 'right-1'
				} w-4 h-4 rounded-full bg-orange-500`}
			></div>
		</div>
	);
};

export default DarkModeToggle;
