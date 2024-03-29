import { navbar } from "vuepress-theme-hope";

export default navbar([
    { text: "最近更新", link: "/board/1-qingxunying.md"},
    { text: "视频项目", link: "/project/1-search-engine.md"},
    { text: "大学专区", link: "/college"},
    {
        text: "学习指南",
        prefix: "/skill",
        children:
        [
            {
                text: "后端",
                prefix: "",
                children: [
                    { text: "MySQL", link: "/1-backend/1-mysql"},
                    { text: "Redis", link: "/1-backend/2-redis"},
                ]
            }
        ]
    },
    {
        text: "学习计划", 
        prefix: "/language",
        children: 
        [
            {
                text: "后端",
                prefix: "",
                children: [
                    { text: "C++", link: "/cpp"},
                    { text: "Golang", link: "/go"},
                    { text: "Java", link: "/java"},
                ]
            },
        ]
    },

  { text: "关于", link: "/about/1-tutorial.md"},


//   {
//     text: "博文",
//     // icon: "edit",
//     prefix: "/posts/",
//     children: [
//         {
//             text: "目录",
//             link: ""
//         },
//       {
//         text: "文章 1-4",
//         icon: "edit",
//         prefix: "article/",
//         children: [
//           { text: "文章 1", icon: "edit", link: "article1" },
//           { text: "文章 2", icon: "edit", link: "article2" },
//           "article3",
//           "article4",
//         ],
//       },
//       {
//         text: "文章 5-12",
//         icon: "edit",
//         children: [
//           {
//             text: "文章 5",
//             icon: "edit",
//             link: "article/article5",
//           },
//           {
//             text: "文章 6",
//             icon: "edit",
//             link: "article/article6",
//           },
//           "article/article7",
//           "article/article8",
//         ],
//       },
//       { text: "文章 9", icon: "edit", link: "article9" },
//       { text: "文章 10", icon: "edit", link: "article10" },
//       "article11",
//       "article12",
//     ],
//   },

//   {
//     text: "主题文档",
//     icon: "note",
//     link: "https://vuepress-theme-hope.github.io/v2/zh/",
//   },
]);
