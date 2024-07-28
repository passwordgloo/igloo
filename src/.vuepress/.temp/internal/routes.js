export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首页","i":"home"} }],
  ["/ability/", { loader: () => import(/* webpackChunkName: "ability_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/ability/index.html.js"), meta: {"e":"\n<p>2</p>\n","r":{"minutes":0.02,"words":5},"t":"方法","y":"a"} }],
  ["/ability/ability1.html", { loader: () => import(/* webpackChunkName: "ability_ability1.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/ability/ability1.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRXNab3l4cUNjcW9h\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】条件推理.pdf</a></p>\n<p><a href=\"https://docs.qq.com/pdf/DRXdkWGZJRUVUTUhK\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】类比推理.pdf</a></p>\n","r":{"minutes":0.1,"words":30},"t":"类比推理","i":"ruler-combined","y":"a"} }],
  ["/ability/ability2.html", { loader: () => import(/* webpackChunkName: "ability_ability2.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/ability/ability2.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRU1TeHJSTmd0Rkt0\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】logic.pdf</a></p>\n","r":{"minutes":0.05,"words":15},"t":"逻辑推理","i":"circle-question","y":"a"} }],
  ["/ability/ability3.html", { loader: () => import(/* webpackChunkName: "ability_ability3.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/ability/ability3.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRWRwbVZmcFdJUXhT\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】necessarily.pdf</a></p>\n","r":{"minutes":0.05,"words":15},"t":"必然性推理","i":"flag","y":"a"} }],
  ["/ability/ability4.html", { loader: () => import(/* webpackChunkName: "ability_ability4.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/ability/ability4.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRUpUUnFVRW1ucEhX\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】possibility.pdf</a></p>\n","r":{"minutes":0.06,"words":18},"t":"可能性推理","i":"arrow-up-right-dots","y":"a"} }],
  ["/common/", { loader: () => import(/* webpackChunkName: "common_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/common/index.html.js"), meta: {"e":"\n<p>3</p>\n","r":{"minutes":0.02,"words":5},"t":"嗯嗯","y":"a"} }],
  ["/common/common1.html", { loader: () => import(/* webpackChunkName: "common_common1.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/common/common1.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRWtkdkVleVN6dk9n\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】technical.pdf</a></p>\n","r":{"minutes":0.04,"words":12},"t":"科技","i":"tags","y":"a"} }],
  ["/common/common2.html", { loader: () => import(/* webpackChunkName: "common_common2.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/common/common2.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRUpkYVFGa3BMdnNX\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】人文常识.pdf</a></p>\n","r":{"minutes":0.06,"words":18},"t":"人文常识","i":"tags","y":"a"} }],
  ["/common/common3.html", { loader: () => import(/* webpackChunkName: "common_common3.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/common/common3.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRUpBV1h1SVNtcVZQ\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】管理学.pdf</a></p>\n","r":{"minutes":0.05,"words":16},"t":"管理学","i":"briefcase","y":"a"} }],
  ["/current/", { loader: () => import(/* webpackChunkName: "current_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/current/index.html.js"), meta: {"e":"\n<p>4</p>\n","r":{"minutes":0.01,"words":4},"t":"的","y":"a"} }],
  ["/current/current1.html", { loader: () => import(/* webpackChunkName: "current_current1.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/current/current1.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRU9WWGNocmlLbEJ3\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】20party.pdf</a></p>\n","r":{"minutes":0.05,"words":15},"t":"中共二十大","i":"republican","y":"a"} }],
  ["/current/current2.html", { loader: () => import(/* webpackChunkName: "current_current2.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/current/current2.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRUdJb0ZlaHRHY3Vj\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】文件标注</a><br>\n<a href=\"https://docs.qq.com/pdf/DRURBbFFXZnZYWFVq\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】重点标注.pdf</a></p>\n","r":{"minutes":0.1,"words":30},"t":"中央一号文件","i":"bullseye","y":"a"} }],
  ["/current/current3.html", { loader: () => import(/* webpackChunkName: "current_current3.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/current/current3.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRUxkQnRvSm5BamZk\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】speech.pdf</a></p>\n","r":{"minutes":0.05,"words":14},"t":"重要讲话","i":"comments","y":"a"} }],
  ["/current/current4.html", { loader: () => import(/* webpackChunkName: "current_current4.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/current/current4.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRWp4T1BTUWJ1VGph\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】spaceship.pdf</a></p>\n","r":{"minutes":0.04,"words":13},"t":"航天","i":"paper-plane","y":"a"} }],
  ["/current/current5.html", { loader: () => import(/* webpackChunkName: "current_current5.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/current/current5.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRVFWZmFxYlBaeGhE\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】report.pdf</a></p>\n","r":{"minutes":0.05,"words":15},"t":"工作报告","i":"person-chalkboard","y":"a"} }],
  ["/paper/", { loader: () => import(/* webpackChunkName: "paper_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/paper/index.html.js"), meta: {"e":"<p>1</p>\n","r":{"minutes":0.01,"words":3},"t":"","y":"a"} }],
  ["/paper/paper1.html", { loader: () => import(/* webpackChunkName: "paper_paper1.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/paper/paper1.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRWtVaGNpeVBIQ0Rt\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】public_article.pdf</a></p>\n","r":{"minutes":0.05,"words":14},"t":"公文格式","i":"highlighter","y":"a"} }],
  ["/paper/paper2.html", { loader: () => import(/* webpackChunkName: "paper_paper2.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/paper/paper2.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRXFQUnZvYnlzclJn\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】pen.pdf</a></p>\n","r":{"minutes":0.05,"words":14},"t":"申论","i":"pen-to-square","y":"a"} }],
  ["/paper/paper3.html", { loader: () => import(/* webpackChunkName: "paper_paper3.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/paper/paper3.html.js"), meta: {"e":"<p><a href=\"https://docs.qq.com/pdf/DRXRzbU9Gc0NscWpj\" target=\"_blank\" rel=\"noopener noreferrer\">【腾讯文档】foresee_paper.pdf</a></p>\n","r":{"minutes":0.05,"words":14},"t":"公文参考","i":"leaf","y":"a"} }],
  ["/paper/paper4.html", { loader: () => import(/* webpackChunkName: "paper_paper4.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/paper/paper4.html.js"), meta: {"e":"<blockquote>\n<p>公文，是公务文书的简称，是国家机关、社会团体、企事业单位在日常工作、活动中为处理公务而按照特定的体式，经过一定的处理程序制成的文字材料。是传达、贯彻党和国家的方针、政策，发布行政法规和规章，施行行政措施,请示和答复问题，指导、布置和商洽工作，报告情况，交流经验的重要工具。</p>\n</blockquote>\n<h2>公文的分类</h2>\n\n<h2>公文文种</h2>\n<p>（一）决议：适用于会议讨论通过的重大决策事项。</p>\n<p>（二）决定：适用于对重要事项作出决策和部署、奖惩有关单位和人员、变更或者撤销下级机关不适当的决定事项。</p>\n<p>决议与决定：主要区别是是否经过会议集体讨论并表决通过。</p>","r":{"minutes":7.75,"words":2326},"t":"公文","i":"bars","I":false,"y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/liuguanglu/igloo/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
