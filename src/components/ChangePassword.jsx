import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";

const ChangePassword = () => {
  const { user, bgColor, setBgColor } = useContext(UserContext);
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  function changePswd(ev) {
    ev.preventDefault();
    const userId = user.id;

    // console.log({ currentPassword, newPassword, confirmNewPassword });
    // console.log(user.password)
    if (newPassword !== confirmNewPassword) {
      alert("The two paswwords doesnot match");
    }
    if (currentPassword == user.password) {
      console.log("true");
      if (newPassword === confirmNewPassword) {
        axios.post("/user/change-password", {
          currentPassword,
          newPassword,
          confirmNewPassword,
          userId
        });
      }
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`p-6 sm:w-full lg:w-1/3 ${changeBgColor()} flex flex-col gap-6 backdrop-blur-md rounded-2xl`}
      >
        <div className={`text-lg font-semibold`}>Change Password</div>
        <form className="flex flex-col items-center justify-center w-full gap-4">
          <input
            className={` w-full ${
              bgColor
                ? "placeholder:text-gray-900"
                : "placeholder:text-gray-100"
            }`}
            type="password"
            placeholder="Current password"
            onChange={(ev) => {
              setcurrentPassword(ev.target.value);
            }}
          />
          <input
            className={` w-full ${
              bgColor
                ? "placeholder:text-gray-900"
                : "placeholder:text-gray-100"
            }`}
            type="text"
            placeholder="New password"
            onChange={(ev) => {
              setNewPassword(ev.target.value);
            }}
          />
          <input
            className={` w-full ${
              bgColor
                ? "placeholder:text-gray-900"
                : "placeholder:text-gray-100"
            }`}
            type="password"
            placeholder="Confirm password"
            onChange={(ev) => {
              setConfirmNewPassword(ev.target.value);
            }}
          />
        </form>

        <button
          className={`${changeBgColor()} px-6 py-3 rounded-2xl font-semibold`}
          onClick={changePswd}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
