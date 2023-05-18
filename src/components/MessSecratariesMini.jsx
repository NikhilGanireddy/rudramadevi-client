import React, { useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const MessSecratariesMini = () => {
  const { bgColor } = useContext(UserContext);
  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  return (
    <div className={` flex flex-col w-full h-full gap-4 rounded-2xl`}>
      <div
        className={`flex items-center justify-between w-full text-lg font-semibold`}
      >
        <span className={` text-lg font-semibold`}>Mess Secrataries</span>
        <Link to={"/user/mess-secratary"}>
          <UilExternalLinkAlt />
        </Link>
      </div>
      <div className={` grid grid-cols-4 gap-4`}>
        <div
          className={`flex  justify-between items-center font-semibold hover:scale-[1.05] duration-100 transition-all ease-linear gap-2 py-3 px-4 rounded-2xl ${changeBgColor()}`}
        >
          <div>Nikhil</div>
          <div>B42</div>
        </div>
        <div
          className={`flex  justify-between items-center font-semibold hover:scale-[1.05] duration-100 transition-all ease-linear gap-2 py-3 px-4 rounded-2xl ${changeBgColor()}`}
        >
          <div>Nikhil</div>
          <div>B42</div>
        </div>
        <div
          className={`flex  justify-between items-center font-semibold hover:scale-[1.05] duration-100 transition-all ease-linear gap-2 py-3 px-4 rounded-2xl ${changeBgColor()}`}
        >
          <div>Nikhil</div>
          <div>B42</div>
        </div>
        <div
          className={`flex  justify-between items-center font-semibold hover:scale-[1.05] duration-100 transition-all ease-linear gap-2 py-3 px-4 rounded-2xl ${changeBgColor()}`}
        >
          <div>Nikhil</div>
          <div>B42</div>
        </div>
        <div
          className={`flex  justify-between items-center font-semibold hover:scale-[1.05] duration-100 transition-all ease-linear gap-2 py-3 px-4 rounded-2xl ${changeBgColor()}`}
        >
          <div>Nikhil</div>
          <div>B42</div>
        </div>
        <div
          className={`flex  justify-between items-center font-semibold hover:scale-[1.05] duration-100 transition-all ease-linear gap-2 py-3 px-4 rounded-2xl ${changeBgColor()}`}
        >
          <div>Nikhil</div>
          <div>B42</div>
        </div>
        <div
          className={`flex  justify-between items-center font-semibold hover:scale-[1.05] duration-100 transition-all ease-linear gap-2 py-3 px-4 rounded-2xl ${changeBgColor()}`}
        >
          <div>Nikhil</div>
          <div>B42</div>
        </div>
        <div
          className={`flex  justify-between items-center font-semibold hover:scale-[1.05] duration-100 transition-all ease-linear gap-2 py-3 px-4 rounded-2xl ${changeBgColor()}`}
        >
          <div>Nikhil</div>
          <div>B42</div>
        </div>
      </div>
    </div>
  );
};

export default MessSecratariesMini;
