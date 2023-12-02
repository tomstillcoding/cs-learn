import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";
const { readmorePlugin } = require('vuepress-plugin-readmore-popular-next')


export default defineUserConfig({
  lang: "zh-CN",
  title: "大学之道",
  description: "🎓 临近毕业，站在大学毕业的终点回看起点，才第一次深刻地理解了视野和选择的重要。",

  base: "/",

  theme,

    alias: {
    "@mIFrame": path.resolve(__dirname, "components/mIframe.vue"),
    },
    
      plugins: [
        
      ],
});
