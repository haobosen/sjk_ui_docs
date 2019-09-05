module.exports = {
    title: '三节课UI组件库', 
    description: '这是一个组件库',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        // nav: [
        //     { text: '主页', link: '/' },
        //     { text: '博文',
        //       items: [
        //         { text: 'banban', link: '/banban/' },
        //         { text: 'assist', link: '/assist/' }
        //       ] 
        //     }
        // ],
        sidebar: {
            '/banban/': [
                '',
                "ui"
            ],
            "/assist/":[
                '',
                "ui",
            ],
            '/': [
                '',
                '/banban/',
                "/assist/"
              ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated', 
    }
}