import Callout from '@components/Callout/Callout';
import mdxPrism from 'mdx-prism';
import renderToString from 'next-mdx-remote/render-to-string';
export const mdx = {
	parse: (mdxContent: string) => {
		return renderToString(mdxContent, {
			components: { Callout },
			mdxOptions: {
				remarkPlugins: [
					require('remark-autolink-headings'),
					require('remark-slug'),
					require('remark-code-titles'),
				],
				rehypePlugins: [mdxPrism],
			},
		});
	},
};
