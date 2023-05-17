import React, { useContext, useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { UserContext } from "../UserContext";

const Sidebar = () => {
  const { bgColor, setBgColor } = useContext(UserContext);

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };


  return (
    <div
      className={`h-full px-2 shadow-lg w-max ${changeBgColor()} rounded-2xl backdrop-blur-md`}
    >
      <SidebarComponent />
    </div>
  );
};

export default Sidebar;
