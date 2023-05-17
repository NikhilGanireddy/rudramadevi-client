import React, { useContext } from "react";
import { BiChair, BiBed, BiBulb } from "react-icons/bi";
import { MdTableRestaurant } from "react-icons/md";
import { UserContext } from "../UserContext";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";

const RoomMini = () => {
  const { bgColor } = useContext(UserContext);

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
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 rounded-2xl">
      <div className="flex items-center justify-between w-full text-lg font-semibold">
        <span>Room</span>
        <UilExternalLinkAlt />
      </div>
      <div className="flex flex-row w-full h-full gap-4">
        <div className="flex flex-col items-center justify-center w-2/5 h-full gap-4 rounded-2xl ">
          <div className="flex w-full gap-4 overflow-hidden h-1/2 rounded-2xl">
            <div className={`w-full h-full ${changeBgPic()}`} />
          </div>
          <div className="grid w-full gap-2 px-4 cols-2 h-1/2 rounded-2xl">
            <div className="flex items-center gap-2">
              <MdTableRestaurant />
              <div>Tables:</div>
              <div>1</div>
            </div>
            <div className="flex items-center gap-2">
              <BiChair />
              <div>Chairs:</div>
              <div>1</div>
            </div>
            <div className="flex items-center gap-2">
              <BiBed />
              <div>Beds:</div>
              <div>4</div>
            </div>
            <div className="flex items-center gap-2">
              <BiBulb />
              <div>Lights:</div>
              <div>2</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/5 h-full rounded-2xl">
          <div className="grid w-full h-full grid-cols-1 gap-4">
            <div
              title="Room Mate"
              className={`${changeBgColor()} px-4 py-1 rounded-2xl flex items-center  scale-[0.95] transition-all duration-200 hover:scale-[1] justify-between`}
            >
              <div className="font-semibold ">Nikhil Ganireddy</div>
              <div
                className={`flex items-center justify-center px-4 py-2 text-white rounded-full ${changeBgColor()} `}
              >
                R
              </div>
            </div>
            <div
              title="Room Mate"
              className={`${changeBgColor()} px-4 py-1 rounded-2xl flex items-center  scale-[0.95] transition-all duration-200 hover:scale-[1] justify-between`}
            >
              <div className="font-semibold ">Govardhan Kosgi</div>
              <div
                title="Room Mate"
                className={`flex items-center justify-center px-4 py-2 text-white rounded-full ${changeBgColor()} `}
              >
                R
              </div>
            </div>
            <div
              title="Room Mate"
              className={`${changeBgColor()} px-4 py-1 rounded-2xl flex items-center  scale-[0.95] transition-all duration-200 hover:scale-[1] justify-between`}
            >
              <div className="font-semibold ">Sandeep Dasari</div>
              <div
                className={`flex items-center justify-center px-4 py-2 text-white rounded-full ${changeBgColor()} `}
              >
                R
              </div>
            </div>
            <div
              title="Room Mate"
              className={`${changeBgColor()} px-4 py-1 rounded-2xl flex items-center  scale-[0.95] transition-all duration-200 hover:scale-[1] justify-between`}
            >
              <div className="font-semibold ">Prashanth Mudusula</div>
              <div
                className={`flex items-center justify-center px-4 py-2 text-white rounded-full ${changeBgColor()} `}
              >
                L
              </div>
            </div>
            <div
              title="Room Mate"
              className={`${changeBgColor()} px-4 py-1 rounded-2xl flex items-center  scale-[0.95] transition-all duration-200 hover:scale-[1] justify-between`}
            >
              <div className="font-semibold ">Nikhil Ganireddy</div>
              <div
                title="regular"
                className={`flex items-center justify-center px-4 py-2 text-white rounded-full ${changeBgColor()} `}
              >
                R
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomMini;
