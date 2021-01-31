import { ThemeProvider } from '@contexts/ThemeContext';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import 'tailwindcss/dist/base.min.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
