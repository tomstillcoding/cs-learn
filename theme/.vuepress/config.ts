import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CS-College ",
  description: "👩🏻‍💻🧑🏻‍💻 既然知道学校教得一般，那为什么还要跟着学校的课程安排呢？",

  base: "/",

  theme,
});
