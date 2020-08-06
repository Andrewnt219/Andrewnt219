import Document, {
  DocumentContext,
  Head,
  NextScript,
  Main,
  Html,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                try {
                  const currentTheme = localStorage.getItem("theme");
                  if(currentTheme == 'dark-mode') {
                    document.body.className='dark-mode';
                    
                  }
                } catch(error) {
                  console.log('Failed to access localStorage');
                }
              })();
              
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}
