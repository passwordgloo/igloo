import { defineClientConfig } from "vuepress/client";
import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_vuepre_7vdxtu6fdkczal4cct2oaakmwm/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/Users/liuguanglu/igloo/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.39_typescript@5.5.4_vuepress@2.0.0-rc.14_@vuepress+bundler-_h5i23kr6xyuv6tpvbtdfaxatku/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_vuepre_7vdxtu6fdkczal4cct2oaakmwm/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_vuepre_7vdxtu6fdkczal4cct2oaakmwm/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_vuepre_7vdxtu6fdkczal4cct2oaakmwm/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_vuepre_7vdxtu6fdkczal4cct2oaakmwm/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/Users/liuguanglu/igloo/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_typescript@5.5.4_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0_yadtsgln6ojn724djxzgbz456y/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/liuguanglu/igloo/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_typescript@5.5.4_vuepre_7vdxtu6fdkczal4cct2oaakmwm/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
});