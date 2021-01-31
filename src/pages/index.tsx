import Callout from '@components/Callout';
import { useThemeUpdater } from '@src/contexts/ThemeContext';
import { SanityDataService } from '@src/services/sanity-data-service';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';
import styled from 'styled-components';
import tw from 'twin.macro';

export default function Home({
	pages,
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const setTheme = useThemeUpdater();
	const renderedContent = hydrate(content, {
		components: {
			Callout,
		},
	});

	return (
		<Text>
			<h1 tw="text-8xl">Hello Andrew</h1>
			<button tw="mr-4" onClick={() => setTheme('dark')}>
				Dark
			</button>

			<button tw="mr-4" onClick={() => setTheme('light')}>
				Light
			</button>
			<button onClick={() => setTheme(null)}>Clear</button>

			{renderedContent}
		</Text>
	);
}

type TextProps = {};
const Text = styled.section<TextProps>`
	${tw`bg-white  text-black dark:(bg-black text-white)`}
`;

export const getStaticProps: GetStaticProps<{
	pages: {
		title: string;
		slug: {
			current: string;
		};
		content: string;
		_createdAt: string;
		_id: string;
	}[];
	content: MdxRemote.Source;
}> = async () => {
	const pages = await SanityDataService.getPosts();
	await SanityDataService.getPosts();
	await SanityDataService.getPosts();
	await SanityDataService.getPosts();
	await SanityDataService.getPosts();
	await SanityDataService.getPosts();
	await SanityDataService.getPosts();

	const content = await renderToString(pages[0].content, {
		components: { Callout },
	});
	return {
		props: { pages, content },
	};
};
