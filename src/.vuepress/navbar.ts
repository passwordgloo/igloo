import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "常识",
    icon: "book",
    link: "/common/",
  },
  {
    text: "行测",
    icon: "book",
    link: "/ability/",
  },
  {
    text: "时政",
    icon: "book",
    link: "/current/",
  },
  {
    text: "申论",
    icon: "book",
    link: "/paper/",
  }
]);
