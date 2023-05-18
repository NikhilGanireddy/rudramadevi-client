import React, { useContext } from "react";
import light from "../assets/light.jpg";
import { UilPen } from "@iconscout/react-unicons";
import { UserContext } from "../UserContext";
import {Link} from "react-router-dom";

const ProfileMini = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="relative flex flex-col gap-4 ">
      <div className="flex items-center justify-between text-lg font-semibold">
        <span>Profile</span>
        <Link to={"/user/profile"}>
          <UilPen />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <img
            src={user != null ? user.pic : light}
            className="w-[100px] rounded-full h-[100px] object-cover"
          ></img>
        </div>
        <div className="flex flex-col items-center justify-center gap-[6px] font-semibold">
          <div className="text-xl font-semibold capitalize">
            {user != null ? user.name : "Nikhil Ganireddy"}
          </div>
          <div>{user != null ? user.hallTicket : "20017T0901"}</div>
          <div className="flex flex-row items-center justify-center gap-6">
            <div>
              {user != null ? user.branch : "CSE"} {user ? user.year : "III"}
            </div>
            <div className="uppercase">{user ? user.room : "B-42"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMini;
