// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Andrew Nguyen',
  tagline:
    'Software Engineer @ KPMG | React.js, TypeScript, Web Performance & Accessibility.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://andrewnt219.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'andrewnt219', // Usually your GitHub org/user name.
  projectName: 'andrewnt219', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Andrew Nguyen',
        logo: {
          alt: 'Website logo with white capitalized character A in blue background',
          src: 'img/logo.svg',
        },
        items: [{ to: '/blog', label: 'Blog' }],
      },
      footer: {
        links: [
          {
            title: 'Navigation',
            items: [
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/blog', label: 'Blog' },
              {
                to: '/project',
                label: 'Projects',
              },
            ],
          },
          {
            title: 'Find me on',
            items: [
              { href: 'https://github.com/andrewnt219', label: 'Github' },
              {
                href: 'https://www.linkedin.com/in/andrewnt219',
                label: 'LinkedIn',
              },
              {
                href: 'https://twitter.com/andrewnt219',
                label: 'Twitter',
              },
              {
                href: 'mailto:hey@andrewnt.dev',
                label: 'Email',
              },
            ],
          },
        ],
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Andrew Nguyen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
