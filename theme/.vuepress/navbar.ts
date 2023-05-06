import { navbar } from "vuepress-theme-hope";

export default navbar([
    { text: "📢 必读", link: "/pay/pay.md" },
    {
        text: "高考暑假",
        prefix: "/university",
        children:
            [
                {
                    text: "高考暑假",
                    prefix: "/1-summer",
                    children: [
                        { text: "如何安排？", link: "/1-tutorial" },
                        { text: "一、真正连上互联网", link: "/2-internet" },
                        { text: "二、一定要考驾照", link: "/3-driver" },
                        { text: "三、购买笔记本电脑", link: "/4-pc" },
                        { text: "四、混新生圈的艺术", link: "/5-group" },
                        // 一切东西都能够从磁力搜索中下载
                        { text: "五、玩", link: "/6-play" }
                    ]
                },
            ]
    },
    {
        text: "大一",
        prefix: "/university",
        children:
            [
                {
                    text: "大一生活",
                    prefix: "/2-freshman",
                    children: [
                        { text: "如何安排？", link: "/1-tutorial" },
                        { text: "一、大学的娱乐中心：PT站", link: "/2-pt" },
                        { text: "二、深度剖析班干部", link: "/3-banganbu" },
                        { text: "三、那些学生组织的秘密", link: "/4-xueshengzuzhi" },
                        { text: "四、那些学生社团的秘密", link: "/5-shetuan" },
                        { text: "五、大学如何考试才正确", link: "/6-exam" },
                        { text: "六、转专业、双学位、双专业", link: "/7-zhuan" },
                        // { text: "七、军训的潜规则", link: "/3-test" },
                        { text: "七、必须习惯没有暑假", link: "/8-shujia" },
                        { text: "八、珍惜你的大学身份", link: "/9-daxueshenfen" },
                        { text: "九、万花筒篇", link: "/10-wanhuatong" },
                    ]
                },
            ]
    },
    {
        text: "大二",
        prefix: "/university",
        children:
            [
                {
                    text: "大二生活",
                    prefix: "/2-freshman",
                    children: [
                        { text: "如何安排？", link: "/1-tutorial" },
                        { text: "一、如何选择专业课", link: "/3-test" },
                        { text: "二、好好选择竞赛和比赛", link: "/3-test" },
                        { text: "三、雅思和四六级一样重要", link: "/3-test" },
                        { text: "四、进实验室是搞学术必备", link: "/3-test" },
                        { text: "五、跑步入党，必须入党", link: "/3-test" },
                        { text: "六、一整年的时间选择未来", link: "/3-test" },
                        { text: "七、万花筒篇", link: "/3-test" },
                    ]
                },
            ]
    },
    {
        text: "大三",
        prefix: "/university",
        children:
            [
                {
                    text: "大三生活",
                    prefix: "/2-freshman",
                    children: [
                        { text: "如何安排？", link: "/1-tutorial" },
                        { text: "一、当你选择【读研】", link: "/2-pt" },
                        { text: "二、当你选择【留学】", link: "/3-test" },
                        { text: "三、当你选择【读博】", link: "/3-test" },
                        { text: "四、当你选择【公务员】", link: "/3-test" },
                        { text: "五、当你选择【工作】", link: "/3-test" },
                        { text: "六、其实上面是个多选题", link: "/3-test" },
                        { text: "七、万花筒篇", link: "/3-test" },
                    ]
                },
            ]
    },
    {
        text: "大四",
        prefix: "/university",
        children:
            [
                {
                    text: "大四生活",
                    prefix: "/2-freshman",
                    children: [
                        { text: "如何安排？", link: "/1-tutorial" },
                        { text: "一、毕业设计和论文的潜规则", link: "/2-pt" },
                        { text: "二、步入人生新篇章前瞻", link: "/3-test" },
                        { text: "三、大学毕业就不再是学生", link: "/3-test" },
                        { text: "四、认识社会，认识世界", link: "/3-test" },
                        // 毕业生福利，各个城市的落户政策等等，大学生补贴等等
                        { text: "五、万花筒篇", link: "/3-test" },
                    ]
                },
            ]
    },
    { text: "🎓 转职必读", link: "/2-fe" },
    {
        text: "研究生",
        prefix: "/skill",
        children:
            [
                {
                    text: "方向选择",
                    prefix: "",
                    children: [
                        { text: "一、保研", link: "/1-backend/1-mysql" },
                        { text: "二、考研", link: "/1-backend/2-redis" },
                        { text: "三、跨专业", link: "/1-backend/2-redis" },
                        { text: "四、研究生与本科生", link: "/1-backend/2-redis" },
                        { text: "五、找导师", link: "/1-backend/2-redis" },
                    ]
                }
            ]
    },
    {
        text: "就业",
        prefix: "/skill",
        children:
            [
                {
                    text: "校招选择",
                    prefix: "",
                    children: [
                        { text: "一、私企", link: "/1-backend/1-mysql" },
                        { text: "二、国央企", link: "/1-backend/2-redis" },
                        { text: "三、外企", link: "/1-backend/2-redis" },
                    ]
                },
                {
                    text: "行业之道",
                    prefix: "",
                    children: [
                        { text: "一、互联网", link: "/1-backend/1-mysql" },
                        { text: "二、游戏艺术", link: "/1-backend/2-redis" },
                        { text: "三、自媒体运营", link: "/1-backend/2-redis" },
                        { text: "四、区块链与Crypto", link: "/1-backend/2-redis" },
                    ]
                },
                {
                    text: "谈判、社会",
                    prefix: "",
                    children: [
                        { text: "一、可斡旋的三方协议", link: "/1-backend/1-mysql" },
                        { text: "二、好好撰写简历", link: "/1-backend/1-mysql" },
                        { text: "三、情商：从实习到入职", link: "/1-backend/1-mysql" },
                        { text: "四、社会运转的本原逻辑", link: "/1-backend/1-mysql" },
                    ]
                }
            ]
    },
    {
        text: "公务员",
        prefix: "/language",
        children:
            [
                { text: "一、考公大纲", link: "/cpp" },
                { text: "二、公务员的潜规则", link: "/go" },
                { text: "三、考公流程与准备", link: "/java" },
                { text: "四、全国待遇汇总", link: "/java" },
                { text: "五、公务员知识", link: "/java" },
            ]
    },
    {
        text: "留学",
        prefix: "/language",
        children:
            [
                { text: "一、留学大纲", link: "/cpp" },
                { text: "二、海硕的巨大优势", link: "/go" },
                { text: "三、留学的流程与准备", link: "/java" },
            ]
    },
    {
        text: "大厂高端",
        prefix: "/language",
        children:
            [
                { text: "一、大厂的那些坑部门", link: "/cpp" },
                { text: "二、大公司的内幕", link: "/go" },
                { text: "三、简历润色", link: "/java" },
                { text: "四、大厂潜规则", link: "/java" },
            ]
    },
    { text: "转码", link: "/about/1-tutorial.md" },
    { text: "🔥 关于", link: "/about/1-tutorial.md" },


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
