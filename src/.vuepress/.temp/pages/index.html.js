import comp from "/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"首页\",\"bgImage\":\"/light/dream.jpg\",\"bgImageDark\":\"/dark/comet.jpg\",\"heroText\":\"回声嘹亮\",\"tagline\":\"顺风而呼，声非加疾也，而闻者彰。\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"project\",\"name\":\"言出法随\",\"desc\":\"听其言，观其行\",\"link\":\"https://doc.iglooblog.top\"},{\"icon\":\"book\",\"name\":\"万象课程\",\"desc\":\"一粒阳光照肺腑，森罗万象罗心胸\",\"link\":\"https://course.iglooblog.top\"},{\"icon\":\"link\",\"name\":\"花瓣\",\"desc\":\"圆尖作瓣得疏密，颜色又染燕脂牢\",\"link\":\"https://huaban.com/user/flyigloo\"},{\"icon\":\"article\",\"name\":\"听潮文库\",\"desc\":\"海潮音入佛耳，薰风句达帝听\",\"link\":\"https://doc.iglooblog.top\"}],\"footer\":\"无志之人常立志，有志之人立常志。\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.46,\"words\":138},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
