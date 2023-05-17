import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { UilMoon, UilSun } from "@iconscout/react-unicons";

const HomePage = () => {
  const { user, bgColor, setBgColor } = useContext(UserContext);

  const changeBgColorBtn = () => {
    setBgColor(!bgColor);
    console.log(bgColor);
  };

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  const changeBgPic = () => {
    if (bgColor == true) {
      return "bg-light";
    }
    if (bgColor == false) return "bg-dark";
  };

  return (
    <div
      className={`${changeBgPic()} w-screen h-screen  flex flex-col items-center p-4 sm:gap-6 lg:gap-12`}
    >
      <nav
        className={`${changeBgColor()} shadow-lg  flex justify-between items-center container h-max  backdrop-blur-sm rounded-2xl px-4 sm:py-2 lg:py-4 sm:mt-0 lg:mt-4`}
      >
        <div className="font-sans text-2xl">Rudramadevi</div>
        <button className="p-2 border rounded-full " onClick={changeBgColorBtn}>
          {bgColor ? <UilMoon /> : <UilSun />}
        </button>
      </nav>
      <main
        className={`${changeBgColor()} flex sm:flex-col lg:flex-row items-center sm:justify-between w-full lg:justify-center container min-h-[80vh] rounded-2xl sm:gap-4 lg:gap-12 `}
      >
        <section
          className={`backdrop-blur-sm  flex flex-col justify-center items-center gap-12 py-6 h-full w-full rounded-2xl text-center `}
        >
          <div className="text-3xl font-semibold">Rudramadevi Girls Hostel</div>

          <div>
            <Link
              to={!!user ? "/user/dashboard" : "/login"}
              className={` px-12 py-2 rounded-2xl ${changeBgColor()} `}
            >
              {!!user ? "Go to Dashboard" : "Login"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
