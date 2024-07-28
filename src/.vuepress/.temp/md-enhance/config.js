import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/liuguanglu/igloo/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_typescript@5.5.4_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0_yadtsgln6ojn724djxzgbz456y/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "./mathjax.css";
import Tabs from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/@mdit+plugin-spoiler@0.12.0_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_2kjumszabgoq7ged6oz26emahy/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
