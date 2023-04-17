import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";
const { readmorePlugin } = require('vuepress-plugin-readmore-popular-next')


export default defineUserConfig({
  lang: "zh-CN",
  title: "大学之道",
  description: "🎓 大学生最缺的不是学习，不是能力，而是信息。",

  base: "/",

  theme,

    alias: {
    "@mIFrame": path.resolve(__dirname, "components/mIframe.vue"),
    },
    
      plugins: [
        readmorePlugin({
            enable: true,
            blogId: '81094-7239398466281-672',
            name: '汤姆还在写代码',
            keyword: 'tom',
            qrcode: 'https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207042307558.png',
          // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
          selector: 'div.theme-hope-content',
          // 自定义的 JS 资源链接，可用于 CDN 加速
        //   libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
        //   // 自定义的 CSS 资源链接，可用于适配不同风格的博客
        //   cssUrl: 'https://qiniu.techgrow.cn/readmore/dist/vuepress2.css',
          // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
          excludes: { strExp: [], regExp: [] },
          // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
          reverse: false,
          // 文章解锁后凭证的有效天数
          expires: 365,
          // 定时校验凭证有效性的时间间隔（秒）
          interval: 30,
          height: 'auto',
          // 每篇文章随机添加引流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加引流工具
          random: 1
        })
      ],
});
