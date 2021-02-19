import { RouteValues } from '@src/data/routes-data';
import { useRouteMatch } from '@src/package/hooks/useRouteMatch';
import NextLink from 'next/link';
import React, { useState, VFC } from 'react';
import tw, { css, styled } from 'twin.macro';

/* -------------------------------------------------------------------------- */
/*                                DropdownItem                                */
/* -------------------------------------------------------------------------- */
type DropdownItemProps = {
	data: RouteValues;
};

const DropdownItem: VFC<DropdownItemProps> = ({ data }) => {
	const { text, href, children, exact } = data;
	const isActive = useRouteMatch(href.toString(), exact);
	const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

	const handleMouseEnter = () => {
		setIsVisibleDropdown(true);
	};

	const handleMouseLeave = () => {
		setIsVisibleDropdown(false);
	};

	return (
		<DropdownItemContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleMouseEnter}
			onBlur={handleMouseLeave}
		>
			<NextLink href={href} passHref>
				<DropdownItemLink isActive={isActive}>{text}</DropdownItemLink>
			</NextLink>
			{children && isVisibleDropdown && <DropdownItemSet data={children} />}
		</DropdownItemContainer>
	);
};

type DropdownItemContainerProps = {};
const DropdownItemContainer = styled.div<DropdownItemContainerProps>`
	${tw``}
`;

const activeLinkCss = css`
	${tw`text-red-400`}
`;

type DropdownItemLinkProps = {
	isActive: boolean;
};
const DropdownItemLink = styled.a<DropdownItemLinkProps>`
	${tw``}

	${(p) => p.isActive && activeLinkCss}
`;

/* -------------------------------------------------------------------------- */
/*                               DropdownItemSet                              */
/* -------------------------------------------------------------------------- */

type Props = {
	data: RouteValues[];
};

const DropdownItemSet: VFC<Props> = ({ data }) => {
	return (
		<Container>
			{data.map((route) => (
				<li key={route.href.toString()}>
					<DropdownItem data={route} />
				</li>
			))}
		</Container>
	);
};

type ContainerProps = {};
const Container = styled.ul<ContainerProps>`
	${tw``}
`;
export default DropdownItemSet;
