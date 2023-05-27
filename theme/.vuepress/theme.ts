import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";




export default hopeTheme({
  hostname: "https://www.tomcode.xyz",
  logo: "/logo.png",
//   author: "汤姆还在写代码",
  repo: "https://github.com/tomstillcoding/cs-learn",
  navbar: navbar,
  sidebar: sidebar,

  

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  docsDir: "/theme",
  pageInfo: ["Author", "ReadingTime", "Word"],
  contributors: false,
  editLink: true,
//   copyright: "Copyright © <汤姆还在写代码> ",
  displayFooter: true,
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022084398号-2</a> ｜ Copyright © <汤姆同学> ',
  lastUpdated: false,
  breadcrumb: false,


  plugins: {

    components: [
        "YouTube",
        ],

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   provider: "Giscus",
    //   repo: "tomstillcoding/cs-learn",
    //   repoId: "R_kgDOHkbORg",
    //   category: "General",
    //   categoryId: "DIC_kwDOHkbORs4CQATq",
    // },

    mdEnhance: {
        tabs: true,
        codetabs: true,
        tasklist: true,
        imageSize: true,
        imageMark: true,
        attrs: true,
        mark: true,
        container: true,
    },

    






  },

  
});



// 添加视频的方式：
// <script setup lang="ts">
// import mIFrame from "@mIFrame";
// </script>
// <mIFrame src="https://player.bilibili.com/player.html?aid=90992146&cid=155380603&page=1&danmaku=0&high_quality=1"/>
// <mIFrame />
