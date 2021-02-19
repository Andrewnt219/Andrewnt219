/* -------------------------------------------------------------------------- */
/*                                  MenuItem                                  */

import { RouteValues } from '@src/data/routes-data';
import { useRouteMatch } from '@src/package/hooks/useRouteMatch';
import NextLink from 'next/link';
import {
	FocusEventHandler,
	KeyboardEventHandler,
	useRef,
	useState,
	VFC,
} from 'react';
import tw, { css, styled } from 'twin.macro';

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

	const handleKeyDown: KeyboardEventHandler = (e) => {
		// stop bubbling up to the parent
		e.stopPropagation();

		if (e.key === 'Enter' && children !== undefined) {
			e.preventDefault();
			setIsVisibleDropdown((prev) => !prev);
		}
	};

	const blurTimerId = useRef<NodeJS.Timeout | null>(null);

	const handleBlur: FocusEventHandler = () => {
		blurTimerId.current = setTimeout(() => {
			if (isVisibleDropdown) {
				setIsVisibleDropdown(false);
			}
		}, 10);
	};

	const handleFocus: FocusEventHandler = () => {
		if (blurTimerId.current) {
			clearTimeout(blurTimerId.current);
			blurTimerId.current = null;
		}
	};

	return (
		<MenuItemContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onKeyDown={handleKeyDown}
			onBlur={handleBlur}
			onFocus={handleFocus}
		>
			<NextLink href={href} passHref>
				<MenuItemLink
					aria-expanded={isVisibleDropdown}
					aria-haspopup={children !== undefined}
					isActive={isActive}
				>
					{text}
				</MenuItemLink>
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

const DropdownItemSet = styled(MenuItemSet)`
	${tw``}
`;

export default MenuItemSet;