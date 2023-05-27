import { navbar } from "vuepress-theme-hope";

export default navbar([
    { text: "💎 指南", link: "/pay/daxuezhidao" },
    {
        text: "🤔 大学认知篇",
        prefix: "/daxuerenzhipian",
        children:
            [
                {
                    text: "大学认知篇",
                    prefix: "",
                    children: [
                        { text: "一、你想成为什么样的人", link: "/1-nixiangchengwei" },
                        { text: "二、大学到底是什么", link: "/2-daxuedaodi" },
                        { text: "三、大学里的成绩观", link: "/3-daxuelide" },
                        { text: "四、不要在大学表面努力", link: "/4-buyaozai" },
                        { text: "五、抛弃所有高中认知", link: "/5-paoqisuoyou" },
                        { text: "六、难不代表正确", link: "/6-nanbudaibiao"},
                    ]
                },
                
            ]
    },
    {
        text: "🏖 高考暑假",
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
                        { text: "五、毕业的那些事儿", link: "/6-biye" },
                        { text: "六、一定要学会磁力链接", link: "/7-cili"},
                    ]
                },
            ]
    },
    {
        text: "👶🏻 大一",
        prefix: "/university",
        children:
            [
                {
                    text: "大一生活",
                    prefix: "/2-freshman",
                    children: [
                        // { text: "如何安排？", link: "/1-tutorial" },
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
        text: "👧 大二",
        prefix: "/university",
        children:
            [
                {
                    text: "大二生活",
                    prefix: "/3-sophomore",
                    children: [
                        // { text: "如何安排？", link: "/0-tutorial" },
                        { text: "一、如何选择通识和专业选修课", link: "/1-zhuanyeke" },
                        { text: "二、如何选择竞赛和比赛", link: "/2-bisai" },
                        { text: "三、雅思和四六级一样重要", link: "/3-yasi" },
                        { text: "四、进实验室、发文章", link: "/4-shiyanshi" },
                        { text: "五、跑步入党", link: "/5-rudang" },
                        { text: "六、一整年的时间选择未来", link: "/6-xuanze" },
                        { text: "七、万花筒篇", link: "/7-wanhuatong" },
                    ]
                },
            ]
    },
    {
        text: "👦 大三",
        prefix: "/university",
        children:
            [
                {
                    text: "大三生活",
                    prefix: "/4-junior",
                    children: [
                        // { text: "如何安排？", link: "/0-tutorial" },
                        { text: "一、没有最好的选择", link: "/1-xuanze"},
                        { text: "二、当你选择【读研】", link: "/2-duyan" },
                        { text: "三、当你选择【留学】", link: "/3-liuxue" },
                        { text: "四、当你选择【公务员】", link: "/4-gongwuyuan" },
                        { text: "五、当你选择【工作】", link: "/5-gongzuo" },
                        { text: "六、其实上面是个多选题", link: "/6-duoxuanti" },
                        { text: "七、万花筒篇", link: "/7-wanhuatong" },
                    ]
                },
            ]
    },
    {
        text: "👩‍🎓 大四",
        prefix: "/university",
        children:
            [
                {
                    text: "大四生活",
                    prefix: "/5-senior",
                    children: [
                        // { text: "如何安排？", link: "/0-tutorial" },
                        { text: "一、毕业设计的潜规则", link: "/1-biyesheji" },
                        { text: "二、准备毕业旅行", link: "/2-lvxing" },
                        { text: "三、抛弃学生思维", link: "/3-xueshengsiwei" },
                        { text: "四、选择城市很重要", link: "/4-chengshi"},
                        { text: "五、选择行业、公司、岗位", link: "/5-hangye"},
                        // 毕业生福利，各个城市的落户政策等等，大学生补贴等等
                        // wangzhenyu的那些文章，都可以抄过来，什么高三系列、自律早起、食谱减肥之类的、还有爱情
                        { text: "六、万花筒篇", link: "/6-wanhuatong" },
                    ]
                },
            ]
    },
    { text: "🎓 转职必读", link: "/zhuanzhi" },
    {
        text: "👩‍🏫‍ 研究生",
        prefix: "/graduate",
        children:
            [
                {
                    text: "【方向选择篇】",
                    prefix: "/1-fangxiangxuanze",
                    children: [
                        { text: "一、研究生生活是怎样的", link: "/1-shenghuo" },
                        { text: "二、为什么要读研", link: "/2-weishenme" },
                        { text: "三、怎么选导师", link: "/3-xuandaoshi" },
                        { text: "四、学硕和专硕", link: "/4-qubie" },
                        { text: "五、联培", link: "/5-lianpei" },
                    ]
                },

                {
                    text: "【保研篇】",
                    prefix: "/2-baoyan",
                    children: [
                        { text: "【前言】先必须了解保研", link: "/1-xianbixuliao" },
                        { text: "【三年保研之路】课内学习篇", link: "/2-1-kenneixuexi" },
                        { text: "【三年保研之路】课外拓展篇", link: "/2-2-kewaituozhan" },
                        { text: "【三年保研之路】大学三年阶段", link: "/2-3-daxuesannian" },
                        { text: "【保研法宝】保研就是信息战", link: "/3-1-baoyanjiushi" },
                        { text: "【保研法宝】准备自身材料", link: "/3-2-zhunbeizishen" },
                        { text: "【保研法宝】投递材料潜规则", link: "/3-3-toudicailiao" },
                        { text: "【保研法宝】选择和联系导师", link: "/3-4-xuanzehelian" },
                        { text: "【保研法宝】面试中的经验", link: "/3-5-mianshizhongde" },
                        { text: "【保研法宝】关于保研心态", link: "/3-6-guanyubaoyan" },
                        { text: "【保研法宝】夏令营", link: "/3-7-xialingying" },
                        { text: "【尘埃落定】尘埃落定后", link: "/4-chenailuoding" },
                    ]
                },
                {
                    text: "【考研篇】",
                    prefix: "/3-kaoyan",
                    children: [
                        { text: "【前言】面对考研", link: "/1-mianduikaoyan" },
                        { text: "【前言】先必须了解考研", link: "/2-xianbixuliaojie" },
                        { text: "【考研基础知识】时间线", link: "/3-1-shijianxian" },
                        { text: "【考研基础知识】初试", link: "/3-2-chushi" },
                        { text: "【考研基础知识】复试", link: "/3-3-fushi" },
                        { text: "【考研基础知识】调剂", link: "/3-4-tiaoji" },
                        { text: "【考研潜规则】为什么要考研", link: "/4-1-weishenme" },
                        { text: "【考研潜规则】调节自己的心态", link: "/4-2-tiaojie" },
                        { text: "【考研潜规则】确定院校与导师", link: "/4-3-queding" },
                        { text: "【考研潜规则】信息收集渠道", link: "/4-4-xinxi" },
                        { text: "【考研潜规则】体会与经验", link: "/4-5-tihui" },
                        { text: "【考研规划】985211考研", link: "/5-1-985" },
                        { text: "【考研规划】一二本考研", link: "/5-2-yier" },
                    ]
                },

                {
                    text: "辅导员篇",
                    prefix: "/4-fudaoyuan",
                    children: [
                        { text: "一、了解辅导员", link: "/1-liaojie" },
                        { text: "二、辅导员未来发展与待遇", link: "/2-fudaoyuan" },
                        { text: "三、如何判断是否适合辅导员", link: "/3-ruhepanduan" },
                        { text: "四、如何成为辅导员", link: "/4-ruhechengwei" },
                    ]
                }
            ],
            
    },
    {
        text: "👨‍💻‍ 就业",
        prefix: "/jiuye",
        children:
            [
                {
                    text: "【必备的基本知识】",
                    prefix: "/1-bibei",
                    children: [
                        { text: "一、公司一个月付你1万，你只能拿6千", link: "/1-gongsi" },
                    ]
                },
                {
                    text: "【企业类型讨论】",
                    prefix: "/2-qiye",
                    children: [
                        { text: "一、重视选择企业的类型", link: "/1-zhongshi" },
                        { text: "二、私企民企", link: "/2-siqi" },
                        { text: "三、国企央企", link: "/3-guoqi" },
                        { text: "四、外资外企", link: "/4-waizi" },
                        { text: "五、事业单位", link: "/5-shiye" },
                        { text: "六、外企/国企/民企对比", link: "/6-waiqi" },
                        { text: "七、永远不要想着躺平", link: "/7-yongyuan" },
                    ]
                },
                {
                    text: "【行业岗位内幕】",
                    prefix: "/3-hangye",
                    children: [
                        { text: "一、互联网类", link: "/1-hulianwang" },
                        { text: "二、游戏类", link: "/2-youxi" },
                        { text: "三、地产类", link: "/3-dichan" },
                        { text: "四、金融类", link: "/4-jinrong" },
                        { text: "五、新能源类", link: "/5-xinnengyuan" },
                        { text: "六、人工智能类", link: "/6-rengong" },
                        { text: "七、自媒体类", link: "/7-zimeiti" },
                        { text: "八、快消类", link: "/8-kuaixiao" },
                        { text: "九、四大咨询类", link: "/9-sida" },
                    ]
                },
                {
                    text: "【时间线和潜规则】",
                    prefix: "/4-shijianxian",
                    children: [
                        { text: "【开篇】就业的认知改变", link: "/1-jiuye" },
                        { text: "【如何找到对应企业】私企篇", link: "/2-1-siqi" },
                        { text: "【如何找到对应企业】国企篇", link: "/2-2-guoqi" },
                        { text: "【如何找到对应企业】外企篇", link: "/2-3-waiqi" },
                        { text: "【时间线】个人计划就业时间线", link: "/3-geren" },
                        { text: "【简历】如何做简历", link: "/4-1-ruhe" },
                        { text: "【简历】产品经理的简历要点", link: "/4-2-chanpin" },
                        { text: "【面试】群面", link: "/5-1-qunmian" },
                        { text: "【面试】无领导讨论", link: "/5-2-wulingdao" },
                        { text: "【面试】面试套路篇", link: "/5-3-mianshitaolu" },
                        { text: "【面试】面试最佳实践篇", link: "/5-4-mianshizuijia" },
                        { text: "【Offer】多个Offer，如何选择", link: "/6-1-shoushang" },
                        { text: "【Offer】三方协议怎么签", link: "/6-2-sanfang" },
                        { text: "【入职】就业入职相关", link: "/7-jiuye" },
                    ]
                }
            ]
    },
    {
        text: "💼 公务员",
        prefix: "/gongwuyuan",
        children:
            [
                {
                    text: "那些考公要了解的事情",
                    prefix: "/1-naxiekaogong",
                    children: [
                        { text: "一、考公并不是一直越来越热", link: "/1-kaogong" },
                        { text: "二、苏州深圳事业编内幕", link: "/2-suzhoushenzhen" },
                    ]
                },
                {
                    text: "进体制必读文献",
                    prefix: "/2-jintizhi",
                    children: [
                        { text: "一、《中县干部》", link: "/1-zhongxian" },
                        { text: "二、《置身事内：中国政府与经济发展》", link: "/2-zhishenshinei" },
                    ]
                },
                {
                    text: "公务员考试",
                    prefix: "/3-gongwuyuankaoshi",
                    children: [
                        { text: "【国考省考】了解含义", link: "/1-1-liaojie" },
                        { text: "【国考省考】区别", link: "/1-2-qubie" },
                        { text: "【选调生】选调生篇", link: "/2-1-xuandiao" },
                        { text: "【遴选】遴选篇", link: "/2-2-linxuan" },
                    ]
                },
                {
                    text: "公务员信息",
                    prefix: "/4-gongwuyuanxinxi",
                    children: [
                        { text: "一、各地公务员待遇", link: "/1-daiyu" },
                    ]
                },
            ]
    },
    {
        text: "🌏 留学",
        prefix: "/liuxue",
        children:
            [
                {
                    text: "留学计划",
                    prefix: "/1-liuxuejihua",
                    children: [
                        { text: "一、标准化衡量自己的留学道路", link: "/1-biaozhunhua" },
                    ]
                },
                {
                    text: "留学准备",
                    prefix: "/2-liuxuezhunbei",
                    children: [
                        { text: "一、语言考试", link: "/1-yuyan" },
                        { text: "二、出国交流，暑研", link: "/2-chuguo" },
                        { text: "三、推荐信", link: "/3-tuijian" },
                    ]
                },
                {
                    text: "选校、留学申请",
                    prefix: "/3-xuanxiao",
                    children: [
                        { text: "一、GPA计算方法", link: "/1-gpa" },
                        { text: "二、文书、简历、面试", link: "/2-wenshu" },
                        { text: "三、套磁", link: "/3-taoci" },
                    ]
                },
                {
                    text: "选校攻略",
                    prefix: "/4-xuanxiaogonglue",
                    children: [
                        { text: "【德国】", link: "/1-deguo" },
                        { text: "【新加坡】", link: "/2-xinjiapo" },
                        { text: "【日本】", link: "/3-riben" },
                        { text: "【美国】一、美研EE/ECE/CS项目详解", link: "/4-1-meiyan" },
                        { text: "【加拿大】一、CS留学", link: "/5-1-cs" },
                    ]
                },
            ]
    },
    {
        text: "🥶 大厂篇",
        prefix: "/language",
        children:
            [
                { text: "内部资料......", link: "/pay/daxuezhidao" },
            ]
    },
    {
        text: "🤯 认知之路",
        prefix: "/rich",
        children:
            [
                { text: "一、普通人怎么能拥有千万资产？", link: "/1-qianwan" },
            ]
    },
    // { text: "🔥 关于", link: "/about/1-tutorial.md" },


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
