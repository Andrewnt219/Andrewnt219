import { css } from 'twin.macro';

export const darkPrismStyles = css`
	code[class*='language-'],
	pre[class*='language-'] {
		color: #c5c8c6;
		text-shadow: 0 1px rgba(0, 0, 0, 0.3);
		font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier,
			monospace;
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		line-height: 1.5;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	/* Code blocks */
	pre[class*='language-'] {
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background: #1d1f21;
	}

	/* Inline code */
	:not(pre) > code[class*='language-'] {
		padding: 0.1em;
		border-radius: 0.3em;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #7c7c7c;
	}

	.token.punctuation {
		color: #c5c8c6;
	}

	.namespace {
		opacity: 0.7;
	}

	.token.property,
	.token.keyword,
	.token.tag {
		color: #96cbfe;
	}

	.token.class-name {
		color: #ffffb6;
		text-decoration: underline;
	}

	.token.boolean,
	.token.constant {
		color: #99cc99;
	}

	.token.symbol,
	.token.deleted {
		color: #f92672;
	}

	.token.number {
		color: #ff73fd;
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted {
		color: #a8ff60;
	}

	.token.variable {
		color: #c6c5fe;
	}

	.token.operator {
		color: #ededed;
	}

	.token.entity {
		color: #ffffb6;
		cursor: help;
	}

	.token.url {
		color: #96cbfe;
	}

	.language-css .token.string,
	.style .token.string {
		color: #87c38a;
	}

	.token.atrule,
	.token.attr-value {
		color: #f9ee98;
	}

	.token.function {
		color: #dad085;
	}

	.token.regex {
		color: #e9c062;
	}

	.token.important {
		color: #fd971f;
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}
`;

export const lightPrismStyle = css`
	code[class*='language-'] pre[class*='language-'] {
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		color: #90a4ae;

		/* font-family: Roboto Mono, monospace; */
		font-size: 1em;
		line-height: 1.5em;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background: #fafafa;
	}

	code[class*='language-']::-moz-selection,
	pre[class*='language-']::-moz-selection,
	code[class*='language-'] ::-moz-selection,
	pre[class*='language-'] ::-moz-selection {
		background: #cceae7;
		color: #263238;
	}

	code[class*='language-']::selection,
	pre[class*='language-']::selection,
	code[class*='language-'] ::selection,
	pre[class*='language-'] ::selection {
		background: #cceae7;
		color: #263238;
	}

	:not(pre) > code[class*='language-'] {
		white-space: normal;
		border-radius: 0.2em;
		padding: 0.1em;
	}

	pre[class*='language-'] {
		overflow: auto;
		position: relative;
		margin: 0.5em 0;
		padding: 1.25em 1em;
	}

	.language-css > code,
	.language-sass > code,
	.language-scss > code {
		color: #f76d47;
	}

	[class*='language-'] .namespace {
		opacity: 0.7;
	}

	.token.atrule {
		color: #7c4dff;
	}

	.token.attr-name {
		color: #39adb5;
	}

	.token.attr-value {
		color: #f6a434;
	}

	.token.attribute {
		color: #f6a434;
	}

	.token.boolean {
		color: #7c4dff;
	}

	.token.builtin {
		color: #39adb5;
	}

	.token.cdata {
		color: #39adb5;
	}

	.token.char {
		color: #39adb5;
	}

	.token.class {
		color: #39adb5;
	}

	.token.class-name {
		color: #6182b8;
	}

	.token.comment {
		color: #aabfc9;
	}

	.token.constant {
		color: #7c4dff;
	}

	.token.deleted {
		color: #e53935;
	}

	.token.doctype {
		color: #aabfc9;
	}

	.token.entity {
		color: #e53935;
	}

	.token.function {
		color: #7c4dff;
	}

	.token.hexcode {
		color: #f76d47;
	}

	.token.id {
		color: #7c4dff;
		font-weight: bold;
	}

	.token.important {
		color: #7c4dff;
		font-weight: bold;
	}

	.token.inserted {
		color: #39adb5;
	}

	.token.keyword {
		color: #7c4dff;
	}

	.token.number {
		color: #f76d47;
	}

	.token.operator {
		color: #39adb5;
	}

	.token.prolog {
		color: #aabfc9;
	}

	.token.property {
		color: #39adb5;
	}

	.token.pseudo-class {
		color: #f6a434;
	}

	.token.pseudo-element {
		color: #f6a434;
	}

	.token.punctuation {
		color: #39adb5;
	}

	.token.regex {
		color: #6182b8;
	}

	.token.selector {
		color: #e53935;
	}

	.token.string {
		color: #f6a434;
	}

	.token.symbol {
		color: #7c4dff;
	}

	.token.tag {
		color: #e53935;
	}

	.token.unit {
		color: #f76d47;
	}

	.token.url {
		color: #e53935;
	}

	.token.variable {
		color: #e53935;
	}
`;
