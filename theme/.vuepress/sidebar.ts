import { sidebar } from "vuepress-theme-hope";

export default sidebar(
    
    // {
    //     // "/guide/" : "structure",
        
    //     "/board/": "structure",
    //     "/project/": "structure",
    //     "/college/": "structure",
    //     "/roadmap/": "structure",
    //     "/language/": "structure",
    //     "/skill/": "structure",
    //     "/about/" : "structure",
    //     "/university/": "structure"

    //     // "/posts/" : "structure",
    // }
    {
        "/university/1-summer/": [
            "/university/1-summer/1-tutorial",
            "/university/1-summer/2-internet",
            "/university/1-summer/3-driver",
            "/university/1-summer/4-pc",
            "/university/1-summer/5-group",
            "/university/1-summer/6-play",
        ],
        "/university/2-freshman": [
            "/university/2-freshman/1-tutorial",
            "/university/2-freshman/2-pt",
            "/university/2-freshman/3-banganbu",
            "/university/2-freshman/4-xueshengzuzhi",
            "/university/2-freshman/5-shetuan",
            "/university/2-freshman/6-exam",
            "/university/2-freshman/7-zhuan",
            "/university/2-freshman/8-shujia",
            "/university/2-freshman/9-daxueshenfen",
            "/university/2-freshman/10-wanhuatong",
        ]
    }
    



// [
//   "/",
//   "/home",
//   "/slide",
//   {
//     text: "如何使用",
//     icon: "creative",
//     prefix: "/guide/",
//     link: "/guide/",
//     children: "structure",
//   },
//   {
//     text: "文章",
//     icon: "note",
//     prefix: "/posts/",
//     children: [
//       {
//         text: "文章 1-4",
//         icon: "note",
//         collapsable: true,
//         prefix: "article/",
//         children: ["article1", "article2", "article3", "article4"],
//       },
//       {
//         text: "文章 5-12",
//         icon: "note",
//         children: [
//           {
//             text: "文章 5-8",
//             icon: "note",
//             collapsable: true,
//             prefix: "article/",
//             children: ["article5", "article6", "article7", "article8"],
//           },
//           {
//             text: "文章 9-12",
//             icon: "note",
//             children: ["article9", "article10", "article11", "article12"],
//           },
//         ],
//       },
//     ],
//   },
// ]

);
