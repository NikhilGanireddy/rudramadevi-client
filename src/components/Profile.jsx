import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { UilCloudUpload } from "@iconscout/react-unicons";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, bgColor } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState(user.pic);

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photo", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then((response) => {
        const { data: filename } = response;
        setProfilePic(filename);
      });
  }

  return (
    <div
      className={`flex flex-col justify-center items-center gap-12 w-full h-full p-4 ${changeBgColor()} rounded-2xl backdrop-blur-md`}
    >
      <div className="flex flex-col items-center justify-center w-full gap-4  h-max">
        <div>
          <div className=" w-[150px] h-[150px] rounded-full flex justify-center items-center overflow-hidden">
            <img className="object-cover w-full h-full" src={user.pic} />
          </div>
        </div>
        <label
          className={`px-8 py-4 flex justify-center items-center gap-2 cursor-pointer  rounded-2xl ${changeBgColor()} }`}
        >
          <UilCloudUpload />
          <input className="hidden" type="file" onChange={uploadPhoto} />
          <span>Upload a photo</span>
        </label>
      </div>
      <div className="grid w-4/5 gap-6 xl:grid-cols-3 lg:grid-cols-2">
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed   rounded-2xl`}
        >
          <h1 className="font-semibold ">Name :</h1>
          <h2>Nikhil Ganireddy</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Hall Ticket No :</h1>
          <h2>20017T0901</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Mobile :</h1>
          <h2>8333020599</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Branch :</h1>
          <h2>CSE</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Year :</h1>
          <h2>Third year</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Batch :</h1>
          <h2>2020-24</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Email :</h1>
          <h2>nikhilganireddy@yahoo.com</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Mother Name :</h1>
          <h2>Janaki Bai Ganireddy</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Father Name :</h1>
          <h2>Naidu Ganireddy</h2>
        </div>

        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Mother Mobile :</h1>
          <h2>8333020599</h2>
        </div>
        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Father Mobile :</h1>
          <h2>8333020599</h2>
        </div>

        <div
          className={`flex flex-row items-center justify-start  ${changeBgColor()} px-6 py-3 gap-2 cursor-not-allowed rounded-2xl`}
        >
          <h1 className="font-semibold ">Address :</h1>
          <h2>Vijayawada, AP</h2>
        </div>
      </div>
      <div className="flex items-center justify-center w-full ">
        <Link
          to={"/user/change-password"}
          className={`${changeBgColor()} px-8 py-4  rounded-2xl`}
        >
          Change Password
        </Link>
      </div>
    </div>
  );
};

export default Profile;
