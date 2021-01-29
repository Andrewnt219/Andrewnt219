import { ThemeProvider } from '@contexts/ThemeContext';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { GlobalStyles as TwGlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return (
		<ThemeProvider>
			<TwGlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
