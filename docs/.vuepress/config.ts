const { defaultTheme } = require('@vuepress/theme-default');

module.exports = {
    title: 'CS-College',

    lang: 'zh-CN',

    description: 'CS-College',

    base: '/',

    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    ],

    theme: defaultTheme({

        logo: '/img/logo.jpg',

        colorMode: 'auto',
        colorModeSwitch: true,
        smoothScroll: true,

        sidebarDepth: 2,

        // lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间

        displayAllHeaders: true,

        // socialLinks: [
        //     {icon: 'github', link: 'https://github.com/tomstillcoding'}
        // ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present tomstillcoding'
        },

        navbar: [
            {
                text: '指南',
                link: '/guide/'
            },
            {
                text: '计算机技术',
                children: [
                    {
                        text: '后端开发',
                        children: [
                            '/cs/backend/',
                            '/cs/backend/'
                        ]
                    },
                    {
                        text: '后端开发2',
                        children: [
                            '/cs/backend/'
                        ]
                    }
                ]
            },

            {
                text: 'GitHub',link: 'https://github.com/tomstillcoding/cs-notes'
            }

        ],


        sidebar: {
            collapsable: true , // 可选的, 默认值是 true,

            '/cs/language/': [
                ['/cs/language', '计算机技术/编程语言'],
                {

                    title: '编程语言',
                    children: [
                        ['language', 'C++'],
                        ['Go/Go', 'Go']
                    ]
                },
                {

                    title: '后端开发',
                    children: [
                        ['C++/C++', 'C++'],
                        ['Go/Go', 'Go']
                    ]
                },
            ],

            '/cs/backend/': [
                ['/cs/backend', '计算机技术/后端开发'],
                {
                    collapsable: true , // 可选的, 默认值是 true,
                    text: '后端开发',
                    children: [
                        '/cs/backend/coroutine/README.md',
                        '/cs/backend/coroutine/coroutine.md'
                    ]
                },
                {
                    collapsable: true , // 可选的, 默认值是 true,
                    text: '后端开发',
                    children: [
                        '/cs/backend/coroutine/README.md',
                        '/cs/backend/coroutine/coroutine.md'
                    ]
                },
            ],
        },
    }),

    plugins: ['@vuepress/back-to-top']
}


