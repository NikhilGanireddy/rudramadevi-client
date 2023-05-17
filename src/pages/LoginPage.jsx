import React, { useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { UilMoon, UilSun } from "@iconscout/react-unicons";

const LoginPage = () => {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("");
  const [hallTicket, sethallTicket] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser, bgColor, setBgColor } = useContext(UserContext);

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

  async function loginUser(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        name,
        hallTicket,
        password
      });
      setUser(data);
      console.log(data);
      console.log(data.name);

      alert("Login Succesful");
      setRedirect(true);
    } catch {
      alert("Login Not Succesful");
    }
  }
  if (redirect) {
    return <Navigate to={"/user/dashboard"} />;
  }

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center p-4 ${changeBgPic()}`}
    >
      <div
        className={` relative flex flex-col justify-center items-center text-center py-12 gap-6 sm:w-full lg:w-1/3 rounded-2xl backdrop-blur-sm ${changeBgColor()}`}
      >
        <button
          className={`absolute top-2 right-2 p-2 flex justify-center items-center rounded-2xl border-none  ${changeBgColor()}`}
          onClick={changeBgColorBtn}
        >
          {bgColor ? <UilMoon /> : <UilSun />}
        </button>
        <h1 className="text-2xl ">Login</h1>
        <form className="flex flex-col items-center justify-center w-full gap-6 px-12">
          <input
            className={` w-full ${
              bgColor
                ? "placeholder:text-gray-900"
                : "placeholder:text-gray-100"
            }`}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(ev) => {
              setName(ev.target.value.toLowerCase());
            }}
          />
          <input
            className={` w-full ${
              bgColor
                ? "placeholder:text-gray-900"
                : "placeholder:text-gray-100"
            }`}
            type="text"
            placeholder="HallTicket no"
            value={hallTicket}
            onChange={(ev) => {
              sethallTicket(ev.target.value.toUpperCase());
            }}
          />
          <input
            className={` w-full ${
              bgColor
                ? "placeholder:text-gray-900"
                : "placeholder:text-gray-100"
            }`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
          <button
            onClick={loginUser}
            className={` flex justify-center items-center px-12 py-2 rounded-2xl border-none ${changeBgColor()}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
