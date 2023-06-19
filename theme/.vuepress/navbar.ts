import { navbar } from "vuepress-theme-hope";

export default navbar([
    { text: "💎 指南", link: "/pay/daxuezhidao" },
    
    // { text: "🔥 关于", link: "/about/1-tutorial.md" },
    { 
        text: "计算机类",
        prefix: "/zhiyuan/1-jisuanjilei/",
        children: [
            { text: "计算机科学与技术", link: "1-jisuan"},
            { text: "软件工程", link: "2-ruanjian"},
            { text: "网络工程", link: "3-wangluo"},
            { text: "物联网工程", link: "4-wulian"},
            { text: "数字媒体技术", link: "5-shuzi"},
            { text: "智能科学与技术", link: "6-zhineng"},
            { text: "数据科学与大数据技术", link: "7-shuju"},
        ]
    },
    {
        text: "电子信息类",
        prefix: "/zhiyuan/2-dianzixinxilei/",
        children: [
            { text: "电子信息工程", link: "1-dianzi"},
            { text: "电子科学与技术", link: "2-dianzi"},
            { text: "通信工程", link: "3-tongxin"},
            { text: "微电子科学与工程", link: "4-weidian"},
            { text: "光电信息科学与工程", link: "5-guangdian"},
            { text: "集成电路", link: "6-jicheng"},
            { text: "电子信息科学与技术", link: "7-dianzi"},
        ]
    },
    {
        text: "经济、金融、财贸类",
        prefix: "/zhiyuan/3-jingjilei/",
        children: [
            { text: "经济学", link: "1-jingji"},
            { text: "金融工程", link: "2-jinrong"},
            { text: "保险、精算", link: "3-baoxian"},
            { text: "国贸、贸经", link: "4-guomao"},
            { text: "税收、财政", link: "5-shuishou"},
        ]
    },
    {
        text: "机械类",
        prefix: "/zhiyuan/4-jixielei/",
        children: [
            { text: "机械工程", link: "1-jixie"},
            { text: "机械自动化", link: "2-jixie"},
            { text: "材料成型及控制工程", link: "3-cailiao"},
            { text: "机电", link: "4-jidian"},
            { text: "工业设计", link: "5-gongye"},
            { text: "过程装备与控制工程", link: "6-guocheng"},
            { text: "车辆工程", link: "7-cheliang"},
            { text: "智能制造", link: "8-zhineng"},
        ]
    },
    {
        text: "自动化与仪器类",
        prefix: "/zhiyuan/5-zidonghuayuyiqilei/",
        children: [
            { text: "自动化", link: "1-zidong"},
            { text: "机器人工程", link: "2-jiqi"},
            { text: "电气工程及其自动化", link: "3-dianqi"},
            { text: "机械设计制造及其自动化", link: "4-jixie"},
            { text: "测控技术与仪器", link: "5-cekong"},
        ]
    }

    // {
    //     text: "博文",
    //     // icon: "edit",
    //     prefix: "/posts/",
    //     children: [
    //         {
    //             text: "目录",
    //             link: ""
    //         },
    //         {
    //             text: "文章 1-4",
    //             icon: "edit",
    //             prefix: "article/",
    //             children: [
    //                 { text: "文章 1", icon: "edit", link: "article1" },
    //                 { text: "文章 2", icon: "edit", link: "article2" },
    //                 "article3",
    //                 "article4",
    //             ],
    //         },
    //         {
    //             text: "文章 5-12",
    //             icon: "edit",
    //             children: [
    //                 {
    //                     text: "文章 5",
    //                     icon: "edit",
    //                     link: "article/article5",
    //                 },
    //                 {
    //                     text: "文章 6",
    //                     icon: "edit",
    //                     link: "article/article6",
    //                 },
    //                 "article/article7",
    //                 "article/article8",
    //             ],
    //         },
    //         { text: "文章 9", icon: "edit", link: "article9" },
    //         { text: "文章 10", icon: "edit", link: "article10" },
    //         "article11",
    //         "article12",
    //     ],
    // },

    // {
    //     text: "主题文档",
    //     icon: "note",
    //     link: "https://vuepress-theme-hope.github.io/v2/zh/",
    // },

]

);
