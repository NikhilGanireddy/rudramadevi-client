import React, {useContext} from 'react'
import { UserContext } from "../UserContext.jsx";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const ComplaintsMini = () => {
  const { bgColor, setBgColor } = useContext(UserContext);

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  return (
    <div className={` w-full h-full flex flex-col gap-4`}>
      <div className={`flex w-full justify-between items-center`}>
        <span className={` text-lg font-semibold`}>Complaints</span>
        <Link to={"/user/complaints"}>
          <UilExternalLinkAlt/>
        </Link>
      </div>
      <div className={` w-full flex h-full justify-center items-center gap-4`}>

      </div>
    </div>
  )
}

export default ComplaintsMini