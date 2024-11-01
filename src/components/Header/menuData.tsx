import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Events",
    path: "/event",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Divisons",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "EDUCATION",
        path: "https://clickvidya.navsiddhi.in/",
        newTab: false,
      },
      {
        id: 42,
        title: "HEALTHCARE",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "SOFTWARE",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "FOOD & AGRICULTURE",
        path: "/",
        newTab: false,
      }
    ],
  },
];
export default menuData;
