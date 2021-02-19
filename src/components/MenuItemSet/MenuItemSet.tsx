/* -------------------------------------------------------------------------- */
/*                                  MenuItem                                  */

import { RouteValues } from '@src/data/routes-data';
import { useRouteMatch } from '@src/package/hooks/useRouteMatch';
import NextLink from 'next/link';
import { useState, VFC } from 'react';
import tw, { css, styled } from 'twin.macro';
import DropdownItemSet from '../DropdownItemSet/DropdownItemSet';

/* -------------------------------------------------------------------------- */
type MenuItemProps = {
	data: RouteValues;
};

const MenuItem: VFC<MenuItemProps> = ({ data }) => {
	const { href, text, exact, children } = data;
	const isActive = useRouteMatch(href.toString(), exact);
	const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

	const handleMouseEnter = () => {
		setIsVisibleDropdown(true);
	};

	const handleMouseLeave = () => {
		setIsVisibleDropdown(false);
	};

	return (
		<MenuItemContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleMouseEnter}
			onBlur={handleMouseLeave}
		>
			<NextLink href={href} passHref>
				<MenuItemLink isActive={isActive}>{text}</MenuItemLink>
			</NextLink>
			{children && isVisibleDropdown && <DropdownItemSet data={children} />}
		</MenuItemContainer>
	);
};

type MenuItemContainerProps = {};
const MenuItemContainer = styled.div<MenuItemContainerProps>`
	${tw``}
`;

const activeLinkCss = css`
	${tw`text-red-400`}
`;
type MenuItemLinkProps = { isActive: boolean };
const MenuItemLink = styled.a<MenuItemLinkProps>`
	${tw``}

	${(p) => p.isActive && activeLinkCss}
`;

/* -------------------------------------------------------------------------- */
/*                                 MenuItemSet                                */
/* -------------------------------------------------------------------------- */
type MenuItemSetProps = {
	data: RouteValues[];
	className?: string;
};

const MenuItemSet: VFC<MenuItemSetProps> = ({ data, className }) => {
	return (
		<MenuItemSetContainer className={className}>
			{data.map((route) => (
				<li key={route.href.toString()}>
					<MenuItem data={route} />
				</li>
			))}
		</MenuItemSetContainer>
	);
};

type MenuItemSetContainerProps = {};
const MenuItemSetContainer = styled.ul<MenuItemSetContainerProps>``;

export default MenuItemSet;
