import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { GlobalStyles as TwGlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return (
		<>
			<TwGlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
