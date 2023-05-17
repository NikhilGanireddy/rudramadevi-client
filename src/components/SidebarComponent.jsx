import React, { useContext, useState } from "react";
import { sideBarData } from "../data/sideBarData";
import { UilAngleDoubleRight } from "@iconscout/react-unicons";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const SidebarComponent = () => {
  const [hideMenuContent, sethideMenuContent] = useState(false);
  const menuContent = () => {
    sethideMenuContent(!hideMenuContent);
  };

  const { bgColor } = useContext(UserContext);

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  const changeHoverBgColor = () => {
    if (bgColor == true) {
      return "hover:bg-gray-900/20 hover:text-black";
    }
    if (bgColor == false) return "hover:bg-white/10 hover:text-white";
  };

  //   const returnTo = (path) => {
  //     return <Navigate to={"path"} />;
  //   };
  return (
    <div className="relative flex flex-col h-full gap-4 ">
      <div className="flex items-center justify-between gap-12 px-2 py-4 text-2xl font-semibold">
        <Link to={"/"} className={`ml-2 ${hideMenuContent ? "hidden" : ""}`}>
          Rudramadevi
        </Link>
        <div
          className={`p-2 text-white rounded-full cursor-pointer transition-all duration-500 bg-dark ${
            hideMenuContent ? "rotate-540" : ""
          }`}
          onClick={menuContent}
        >
          <UilAngleDoubleRight />
        </div>
      </div>
      <div className="relative flex flex-col h-full gap-3">
        {sideBarData.map((data) => {
          return (
            <Link
              to={data.path}
              className={`flex items-center gap-3 px-4 rounded-2xl py-3 ${changeHoverBgColor()} ${
                data.class
              }  cursor-pointer ${hideMenuContent ? "justify-center" : ""}`}
              key={data.id}
            >
              {data.icon}
              <h1
                className={`font-semibold ${hideMenuContent ? "hidden" : ""}`}
              >
                {data.text}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarComponent;
