import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const [redirect, setRedirect] = useState(null);

  const { bgColor, setUser } = useContext(UserContext);

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`flex flex-col items-center justify-center gap-6 p-12 backdrop-blur-md rounded-2xl ${changeBgColor()}`}
      >
        <div className="flex flex-col items-center gap-1 ">
          <div className="text-lg ">Logged in as nikhilgdp</div>
          <div>{`( nikhilganireddy@yahoo.com )`}</div>
        </div>
        <button
          className={`px-6 py-2 rounded-2xl  ${changeBgColor()}`}
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Logout;
