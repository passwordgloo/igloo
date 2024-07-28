import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "常识",
    icon: "bookmark",
    link: "/common/",
  },
  {
    text: "行测",
    icon: "vials",
    link: "/ability/",
  },
  {
    text: "时政",
    icon: "landmark",
    link: "/current/",
  },
  {
    text: "申论",
    icon: "paperclip",
    link: "/paper/",
  }
]);
