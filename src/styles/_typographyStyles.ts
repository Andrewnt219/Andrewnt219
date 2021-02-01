import { css } from 'twin.macro';

export const fontFace = css`
	/* inter-regular - latin */
	@font-face {
		font-family: 'Inter';
		font-display: 'swap';
		font-style: normal;
		font-weight: 400;
		src: local(''),
			url('/fonts/Inter/inter-v3-latin-regular.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */
				url('/fonts/Inter/inter-v3-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* inter-500 - latin */
	@font-face {
		font-family: 'Inter';
		font-display: 'swap';
		font-style: normal;
		font-weight: 500;
		src: local(''), url('/fonts/Inter/inter-v3-latin-500.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */
				url('/fonts/Inter/inter-v3-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* inter-700 - latin */
	@font-face {
		font-family: 'Inter';
		font-display: 'swap';
		font-style: normal;
		font-weight: 700;
		src: local(''), url('/fonts/Inter/inter-v3-latin-700.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */
				url('/fonts/Inter/inter-v3-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* inter-900 - latin */
	@font-face {
		font-family: 'Inter';
		font-display: 'swap';
		font-style: normal;
		font-weight: 900;
		src: local(''), url('/fonts/Inter/inter-v3-latin-900.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */
				url('/fonts/Inter/inter-v3-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
`;

export const typographyStyles = css`
	${fontFace}
`;
