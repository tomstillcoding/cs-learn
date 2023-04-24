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
            "/university/1-summer/",
            {
                text: "一、连接互联网",
                prefix: "/1-internet/",
                // link: "asdfa",
                collapsable: true,
                children: [
                    "/university/1-summer/1-internet/1-tutorial",
                ]
            },
            {
                text: "二、考驾照",
                prefix: "/2-driver/",
                // link: "asdfa",
                collapsable: true,
                children: [
                    "/university/1-summer/2-driver/1-tutorial",
                    "/university/1-summer/2-driver/2-tips"
                ]
            },
        ],
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
