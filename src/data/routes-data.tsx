import { LinkProps } from 'next/link';
export type RouteValues = Pick<LinkProps, 'href'> & {
	text: string;
	exact?: boolean;
	children?: RouteValues[];
};

export const routes: RouteValues[] = [
	{
		text: 'Home',
		href: '/',
		exact: true,
	},
	{
		text: 'About',
		href: '/about',
	},
	{
		text: 'Projects',
		href: '/projects',
	},
	{
		text: 'Blog',
		href: '/blogs',
		children: [
			{
				text: 'Home',
				href: '/',
				exact: true,
			},
			{
				text: 'About',
				href: '/about',
			},
			{
				text: 'Projects',
				href: '/projects',
			},
			{
				text: 'Inner',
				href: '/blogs',
				children: [
					{
						text: 'Home',
						href: '/',
						exact: true,
					},
					{
						text: 'About',
						href: '/about',
					},
					{
						text: 'Projects',
						href: '/projects',
					},
				],
			},
		],
	},
];
