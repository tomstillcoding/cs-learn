import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "",

  author: {
    name: "汤姆还在写代码",
    url: "",
  },

//   iconAssets: "iconfont",

  logo: "/logo.png",

  pure: true,

  repo: "https://github.com/tomstillcoding/cs-college",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

//   footer: "默认页脚",

  displayFooter: true,

//   pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
pageInfo: ["Author", "Original", "Date", "ReadingTime"],

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // blog: {
    //   autoExcerpt: true,
    // },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
    //   enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
