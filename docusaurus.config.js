// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '小九馆',
    tagline: '亲眼去看, 亲耳去听, 亲口讲述',
    url: 'https://novoland-developer-network.github.io',
    baseUrl: '/BistroWebsite/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'novoland-developer-network', // Usually your GitHub org/user name.
    projectName: 'BistroWebsite', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: '小九馆',
            logo: {
                alt: 'bistro Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: '简介',
                },
                { to: '/blog', label: '开发者说', position: 'left' },
                {
                    href: 'https://github.com/novoland-developer-network/BistroFrontend',
                    label: '源代码',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: '文档',
                    items: [{
                        label: '简介',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: '社区',
                    items: [{
                            label: '机巧殿🏗开发者',
                            href: 'https://jq.qq.com/?_wv=1027&k=DUMjkk9z',
                        },
                        {
                            label: '龙渊阁❤发光者',
                            href: 'https://jq.qq.com/?_wv=1027&k=GZTy3dfU',
                        },
                        {
                            label: '第一群☀热爱者',
                            href: 'https://jq.qq.com/?_wv=1027&k=4uT4985q',
                        },
                    ],
                },
                {
                    title: '了解更多',
                    items: [{
                            label: '开发者说',
                            to: '/blog',
                        },
                        {
                            label: '源代码',
                            href: 'https://github.com/novoland-developer-network/BistroFrontend',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://999999999.net.cn" target="_blank">机巧殿</a>荣誉出品`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
