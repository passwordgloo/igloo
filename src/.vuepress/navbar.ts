import { navbar } from "vuepress-theme-hope";
import { version } from '../../package.json'

export default navbar([
  "/",
  {
    text: "公基",
    icon: "bullseye",
    children:[
      {
        text: "政治篇",
        icon: "flag-swallowtail",
        link: "/common/politics.html",
      },
      {
        text: "经济篇",
        icon: "flag-swallowtail",
        link: "https://doc.iglooblog.top/blogs/politics/economic1.html",
      },
      {
        text: "历史篇",
        icon: "flag-swallowtail",
        link: "/common/history/",
      },
      {
        text: "法律篇",
        icon: "flag-swallowtail",
        link: "/common/law/",
      },
      {
        text: "生活篇",
        icon: "flag-swallowtail",
        link: "/common/life/",
      },
    ]
  },
  {
    text: "行测",
    icon: "sheriff",
    link: "/ability/",
  },
  {
    text: "时政",
    icon: "block-question",
    link: "/current/",
  },
  {
    text: "申论",
    icon: "person-chalkboard",
    link: "/paper/",
  },
  {
    text: `${version}`,
    icon: 'calendar-days',
    link: '/CHANGELOG.md'
  }
]);
