import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  // lang: "en-US",
  lang:"zh-CN",
  title: "回声嘹亮",
  description: "顺风而呼，声非加疾也，而闻者彰。",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
