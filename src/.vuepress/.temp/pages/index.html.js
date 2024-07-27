import comp from "/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"首页\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"heroText\":\"裂石穿云\",\"tagline\":\"顺风而呼，声非加疾也，而闻者彰。\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"project\",\"name\":\"project name\",\"desc\":\"project detailed description\",\"link\":\"https://your.project.link\"},{\"icon\":\"link\",\"name\":\"link name\",\"desc\":\"link detailed description\",\"link\":\"https://link.address\"},{\"icon\":\"book\",\"name\":\"book name\",\"desc\":\"Detailed description of the book\",\"link\":\"https://link.to.your.book\"},{\"icon\":\"article\",\"name\":\"article name\",\"desc\":\"Detailed description of the article\",\"link\":\"https://link.to.your.article\"},{\"icon\":\"friend\",\"name\":\"friend name\",\"desc\":\"Detailed description of friend\",\"link\":\"https://link.to.your.friend\"},{\"icon\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"name\":\"custom item\",\"desc\":\"Detailed description of this custom item\",\"link\":\"https://link.to.your.friend\"}],\"footer\":\"无志之人常立志，有志之人立常志。\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.45,\"words\":134},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
