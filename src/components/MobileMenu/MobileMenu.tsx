import { routes, RouteValues } from '@src/data/routes-data';
import { useRouteMatch } from '@src/package/hooks/useRouteMatch';
import NextLink from 'next/link';
import React, { VFC } from 'react';
import tw, { css, styled } from 'twin.macro';
/* -------------------------------------------------------------------------- */
/*                                  MenuItem                                  */
/* -------------------------------------------------------------------------- */
type MenuItemProps = {
	data: RouteValues;
};

const MenuItem: VFC<MenuItemProps> = ({ data }) => {
	const { href, exact, text, children } = data;
	const isActive = useRouteMatch(href.toString(), exact);

	return (
		<>
			<NextLink href={href} passHref>
				<MenuItemLink isActive={isActive}>{text}</MenuItemLink>
			</NextLink>
			{children && <MenuItemSet data={children} />}
		</>
	);
};

const linkActiveCss = css`
	${tw`text-red-400`}
`;
type MenuItemLink = {
	isActive: boolean;
};
const MenuItemLink = styled.div<MenuItemLink>`
	${tw``}

	${(p) => p.isActive && linkActiveCss}
`;

/* -------------------------------------------------------------------------- */
/*                                 MenuItemSet                                */
/* -------------------------------------------------------------------------- */
type MenuItemSetProps = {
	data: RouteValues[];
};

const MenuItemSet: VFC<MenuItemSetProps> = ({ data }) => {
	return (
		<MenuItemSetContainer>
			{data.map((route) => (
				<li key={route.href.toString()}>
					<MenuItem data={route} />
				</li>
			))}
		</MenuItemSetContainer>
	);
};

type MenuSetContainerProps = {};
const MenuItemSetContainer = styled.ul<MenuSetContainerProps>`
	${tw``}
`;

/* -------------------------------------------------------------------------- */
/*                                   SLIDER                                   */
/* -------------------------------------------------------------------------- */
type MobileMenuProps = {};

const MobileMenu: VFC<MobileMenuProps> = ({}) => {
	return (
		<MobileMenuContainer>
			<MenuItemSet data={routes} />
		</MobileMenuContainer>
	);
};

type MobileMenuContainerProps = {};
const MobileMenuContainer = styled.div<MobileMenuContainerProps>`
	${tw``}
`;
export default MobileMenu;
