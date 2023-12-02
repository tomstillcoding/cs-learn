import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";




export default hopeTheme({
  hostname: "https://daxuezhidao.cn",
  logo: "/logo.png",
//   author: "汤姆还在写代码",
//   repo: "https://github.com/tomstillcoding/cs-learn",
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
        ],
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