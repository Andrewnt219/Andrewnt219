import MainLayout from '@src/components/MainLayout/MainLayout';
import Link from 'next/link';
import React, { VFC } from 'react';
import tw, { styled } from 'twin.macro';

type Props = {};

const Homepage: VFC<Props> = ({}) => {
	return (
		<MainLayout>
			<div>
				<h1>Hey, I’m Lee Robinson</h1>
				<h2>
					I’m a developer, writer, and creator. I work at ▲Vercel as a Solutions
					Architect. You’ve found my personal slice of the internet –&nbsp;
					<Link href="/guestbook">
						<a>sign my guestbook&nbsp;</a>
					</Link>
					while you&apos;re here.
				</h2>
				<h3>Most Popular</h3>

				<h3>Projects</h3>
			</div>
		</MainLayout>
	);
};

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
	${tw``}
`;

export default Homepage;

// import Callout from '@components/Callout/Callout';
// import { PostDataService } from '@services/post-data-service';
// import { useThemeUpdater } from '@src/contexts/ThemeContext/ThemeContext';
// import { mdx } from '@src/lib/mdx';
// import { SanityDataService } from '@src/services/sanity-data-service';
// import { GetStaticProps, InferGetStaticPropsType } from 'next';
// import hydrate from 'next-mdx-remote/hydrate';
// import { MdxRemote } from 'next-mdx-remote/types';
// import styled from 'styled-components';
// import tw from 'twin.macro';
// export default function Home({
// 	views,
// 	content,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
// 	const setTheme = useThemeUpdater();
// 	const renderedContent = hydrate(content, {
// 		components: {
// 			Callout,
// 		},
// 	});

// 	return (
// 		<Text>
// 			<h1 tw="text-8xl">Hello Andrew {views ?? 0} views</h1>
// 			<button tw="mr-4" onClick={() => setTheme('dark')}>
// 				Dark
// 			</button>

// 			<button tw="mr-4" onClick={() => setTheme('light')}>
// 				Light
// 			</button>
// 			<button onClick={() => setTheme('os')}>Clear</button>

// 			<article tw="">{renderedContent}</article>
// 		</Text>
// 	);
// }

// type TextProps = {};
// const Text = styled.section<TextProps>`
// 	${tw`bg-white  text-black  max-w-screen-xl px-16 mx-auto dark:(bg-black-light text-white) `}
// `;

// export const getStaticProps: GetStaticProps<{
// 	pages: {
// 		title: string;
// 		slug: {
// 			current: string;
// 		};
// 		content: string;
// 		_createdAt: string;
// 		_id: string;
// 	}[];
// 	content: MdxRemote.Source;
// 	views: number;
// }> = async () => {
// 	const posts = await SanityDataService.getPosts();

// 	const content = await mdx.parse(posts[0]!.content);

// 	const views = await PostDataService.increaseViews(posts[0]!._id);

// 	return {
// 		props: { pages: posts, content, views: views ?? 0 },
// 		revalidate: 1,
// 	};
// };
