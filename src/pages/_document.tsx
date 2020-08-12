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
        <Head>
          <link
            rel="preload"
            href="fonts/raleway-v17-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="fonts/montserrat-v14-latin-300.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                try {
                  const currentTheme = localStorage.getItem("theme");
                  switch (currentTheme) {
                    case "light-mode":
                      document.body.classList.add("light-mode");
                      break;
                
                    case "dark-mode":
                      document.body.classList.add("dark-mode");
                      break;
                      
                    default:
                      document.body.classList.add("light-mode");
                      break;
                  }
                } catch(error) {
                  console.log(error);
                  console.warn('Failed to access localStorage');
                }
              })();
              
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
