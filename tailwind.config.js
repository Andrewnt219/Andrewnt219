/* eslint-disable @typescript-eslint/no-var-requires */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.ts', './src/**/*.tsx'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
