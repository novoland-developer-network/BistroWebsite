// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
    title: "小九馆",
    tagline: "亲眼去看, 亲耳去听, 亲口讲述",
    url: "https://novoland-developer-network.github.io",
    baseUrl: "/BistroWebsite/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "novoland-developer-network", // Usually your GitHub org/user name.
    projectName: "BistroWebsite", // Usually your repo name.
    
    presets: [
        [
            "classic",
            /** @type {import("@docusaurus/preset-classic").Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],
    
    themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
        ({
            navbar: {
                title: "小九馆（内测）",
                logo: {
                    alt: "bistro Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "简介",
                    },
                    { to: "/blog", label: "开发者说", position: "left" },
                    {
                        label: "关于我们",
                        href: "https://9.doylee.cn/d/6",
                        position: "right",
                    },
                    {
                        label: "加入我们",
                        href: "https://jq.qq.com/?_wv=1027&k=DUMjkk9z",
                        position: "right",
                    },
                    {
                        href: "https://github.com/novoland-developer-network/BistroFrontend",
                        label: "参与贡献本站",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "手册",
                        items: [
                            {
                                label: "简介",
                                to: "/docs/intro",
                            }],
                    },
                    {
                        title: "社区",
                        items: [
                            {
                                label: "机巧殿🏗开发者",
                                href: "https://jq.qq.com/?_wv=1027&k=DUMjkk9z",
                            },
                            {
                                label: "龙渊阁❤发光者",
                                href: "https://jq.qq.com/?_wv=1027&k=r4QMdtWt",
                            },
                            {
                                label: "第一群☀热爱者",
                                href: "https://jq.qq.com/?_wv=1027&k=4uT4985q",
                            },
                        ],
                    },
                    {
                        title: "汇聚成海",
                        items: [
                            {
                                label: "九州第一社区@机巧殿",
                                href: "https://9.doylee.cn/",
                            },
                            {
                                label: "秋叶城故事会@龙渊阁",
                                href: "https://9zqiuye.wordpress.com/",
                            },
                        ],
                    },
                    {
                        title: "开发相关",
                        items: [
                            {
                                label: "开发者说",
                                to: "/blog",
                            },
                            {
                                label: "参与贡献 - 本站",
                                href: "https://github.com/novoland-developer-network/BistroWebsite",
                            },
                            {
                                label: "参与贡献 - APP",
                                href: "https://github.com/novoland-developer-network/BistroFrontend",
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
