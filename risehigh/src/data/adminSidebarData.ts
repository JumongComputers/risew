import { icons } from "@/utils/icons";
import React from "react";

interface SidebarItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const sidebarData: SidebarItem[] = [
  {
    title: "Booking",
    icon: React.createElement(icons.Home, {}),
    path: "/admin",
  },
  {
    title: "Staffs",
    icon: React.createElement(icons.Users, {}),
    path: "/admin/staffs",
  },
  {
    title: "Restaurant",
    icon: React.createElement(icons.ChefHat, {}),
    path: "/admin/restaurant",
  },
  {
    title: "Settings",
    icon: React.createElement(icons.Settings, {}),
    path: "/admin/settings",
  },
];

export default sidebarData;
