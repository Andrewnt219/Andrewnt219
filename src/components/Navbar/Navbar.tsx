import { useMenuState } from '@src/contexts/MenuStateContext/MenuStateContext';
import {
	useTheme,
	useThemeUpdater,
} from '@src/contexts/ThemeContext/ThemeContext';
import React, { VFC } from 'react';
import tw, { styled } from 'twin.macro';
import Burger from '../Burger/Burger';

type Props = {};

const Navbar: VFC<Props> = ({}) => {
	const setTheme = useThemeUpdater();
	const theme = useTheme();

	const [isOpenedMenu, setIsOpenedMenu] = useMenuState();

	const handleBurgerClick = () => {
		setIsOpenedMenu((prev) => !prev);
	};

	const handleThemeButonClick = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	return (
		<Nav>
			<SkipLink href="#skip">Skip to content</SkipLink>
			<button
				aria-label="Toggle Dark Mode"
				type="button"
				className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
				onClick={handleThemeButonClick}
			>
				{theme}
			</button>
			<Burger isActive={isOpenedMenu} handleClick={handleBurgerClick} />
			<div>
				{/* <NextLink href="/dashboard">
					<a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
						Dashboard
					</a>
				</NextLink>
				<NextLink href="/blog">
					<a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Blog</a>
				</NextLink>
				<NextLink href="/about">
					<a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
				</NextLink>
				<NextLink href="/">
					<a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
				</NextLink> */}
			</div>
		</Nav>
	);
};

type NavProps = {};
const Nav = styled.nav<NavProps>`
	${tw`sticky top-0 `}
	${tw`flex justify-between items-center max-w-4xl w-full p-8 my-0 mx-auto`}
	${tw`bg-white dark:bg-black`} // necessary for a smooth transition with main
	${tw`transition-colors duration-500`}
`;

type SkipLinkProps = {};
const SkipLink = styled.a<SkipLinkProps>`
	${tw`sr-only focus:not-sr-only`}
`;

export default Navbar;
