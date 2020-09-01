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
          {/* Favicon for google search */}
          <link rel="shortcut icon" href="favicon.ico" />

          {/* Preload fonts for homepage */}
          <link
            rel="preload"
            href="fonts/montserrat-v14-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="fonts/montserrat-v14-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="fonts/raleway-v17-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="fonts/raleway-v17-latin-700.woff2"
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
                      return;
                
                    case "dark-mode":
                      document.body.classList.add("dark-mode");
                      return;
                      
                    default:
                      break;
                  }
                } catch(error) {
                  console.log(error);
                  console.warn('Failed to access localStorage');
                }

                const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                if(userPrefersDark) {
                  document.body.classList.add("dark-mode");
                  return;
                } else {
                  document.body.classList.add("light-mode");
                  return;
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
