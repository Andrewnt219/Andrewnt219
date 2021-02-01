import { ThemeProvider } from '@contexts/ThemeContext';
import GlobalStyles from '@styles/GlobalStyles';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { GlobalStyles as TwGlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return (
		<ThemeProvider>
			<TwGlobalStyles />
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
