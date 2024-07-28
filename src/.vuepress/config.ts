import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  // lang: "en-US",
  lang:"zh-CN",
  title: "回声嘹亮",
  description: "顺风而呼，声非加疾也，而闻者彰。",

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});
