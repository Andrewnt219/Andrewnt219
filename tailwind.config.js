/* eslint-disable @typescript-eslint/no-var-requires */

const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		content: ['./src/**/*.ts', './src/**/*.tsx'],
		fontFace: true,
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			accent: colors.blue[100],
			blue: colors.blue,
			gray: colors.gray,
			black: colors.black,
			white: colors.white,
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
				headings: ['Ubuntu', 'Inter', ...fontFamily.sans],
			},
		},
	},
	variants: {
		appearance: {},
	},
	corePlugins: {
		float: false,
		container: false,
		clear: false,
		order: false,
	},
	plugins: [],
};
