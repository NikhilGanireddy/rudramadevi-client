import React, { useContext } from "react";
import {
  UilCheckCircle,
  UilTimesCircle,
  UilExternalLinkAlt
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const AttendanceMini = () => {
  const { bgColor, setBgColor } = useContext(UserContext);

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  return (
    <div className="relative flex flex-col gap-12">
      <div className="flex items-center justify-between text-lg font-semibold">
        <span>Attendance</span>
        <UilExternalLinkAlt />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="grid w-full h-full grid-cols-5 gap-2">
          <div
            className={`flex flex-col items-center justify-center gap-2 p-2 scale-[0.7] ${changeBgColor()} rounded-2xl hover:scale-[0.8] transition-all duration-200 ease-in-out`}
          >
            <div>13</div>
            <div>May, 2023</div>
            <UilCheckCircle />
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-2 p-2 scale-[0.8] ${changeBgColor()}  bg-gray-900/20 rounded-2xl hover:scale-[0.9] transition-all duration-200 ease-in-out`}
          >
            <div>14</div>
            <div>May, 2023</div>
            <UilCheckCircle />
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-2 p-2 scale-[1] ${changeBgColor()}  bg-gray-900/30 rounded-2xl hover:scale-[1.1] transition-all duration-200 ease-in-out`}
          >
            <div>15</div>
            <div>May, 2023</div>
            <UilTimesCircle />
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-2 p-2 scale-[0.8] ${changeBgColor()}  bg-gray-900/20 rounded-2xl hover:scale-[0.9] transition-all duration-200 ease-in-out`}
          >
            <div>16</div>
            <div>May, 2023</div>
            <UilTimesCircle />
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-2 p-2 scale-[0.7] ${changeBgColor()}  bg-gray-900/20 rounded-2xl hover:scale-[0.8] transition-all duration-200 ease-in-out`}
          >
            <div>17</div>
            <div>May, 2023</div>
            <UilTimesCircle />
          </div>
        </div>
        <div className="flex flex-row justify-around w-full h-full ">
          <div className="flex items-center gap-2 font-semibold">
            <div className="">March:</div>
            <div>28/31</div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <div className="">April:</div>
            <div>30/30</div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <div className="">May:</div>
            <div>12/15</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceMini;
