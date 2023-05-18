import React, {useContext} from "react";
import AttendanceMini from "../components/AttendanceMini";
import FoodMini from "../components/FoodMini";
import ProfileMini from "../components/ProfileMini";
import {UserContext} from "../UserContext";
import {Navigate} from "react-router-dom";
import RoomMini from "../components/RoomMini";
import MessSecratariesMini from "../components/MessSecratariesMini.jsx";

const Dashboard = () => {
    const {user, bgColor} = useContext(UserContext);

    const changeBgColor = () => {
        if (bgColor == true) {
            return "bg-gray-900/20 text-black";
        }
        if (bgColor == false) return "bg-white/10 text-white";
    };

    if (user == null) {
        return <Navigate to={"/login"}/>;
    }

    return (
        <div className="flex flex-col justify-center w-full h-full gap-4 rounded-2xl">
            <div className="flex items-center justify-center w-full gap-4 h-2/5 rounded-2xl">
                <div
                    className={`w-2/5 h-full p-4 transition-all duration-200 ease-in-out shadow-lg rounded-2xl  ${changeBgColor()}  backdrop-blur-md    overflow-hidden  hover:bg-gray-900/30`}
                >
                    <div className="w-full h-full ">
                        <AttendanceMini/>
                    </div>
                </div>
                <div className="flex items-center justify-center w-3/5 h-full gap-4">
                    <div
                        className={`w-1/2 h-full p-4 transition-all duration-200 ease-in-out shadow-lg bg-gray-900/20 rounded-2xl backdrop-blur-md  ${changeBgColor()}   overflow-hidden  hover:bg-gray-900/30`}
                    >
                        <div className="w-full h-full">
                            <FoodMini/>
                        </div>
                    </div>
                    <div
                        className={`w-1/2 h-full p-4 transition-all duration-200 ease-in-out shadow-lg bg-gray-900/20 rounded-2xl backdrop-blur-md   ${changeBgColor()}    overflow-hidden hover:bg-gray-900/30 `}
                    >
                        <div className="w-full h-full">
                            <ProfileMini/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full gap-4 h-3/5 rounded-2xl">
                <div
                    className={`w-1/2 h-full p-4 transition-all duration-200 ease-in-out shadow-lg bg-gray-900/20 rounded-2xl backdrop-blur-md   ${changeBgColor()} hover:bg-gray-900/30   overflow-hidden `}
                >
                    <div className="w-full h-full">
                        <RoomMini/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/2 h-full gap-4 rounded-2xl ">
                    <div
                        className={`w-full p-4 transition-all duration-200 ease-in-out shadow-lg bg-gray-900/20 backdrop-blur-md h-1/2 rounded-2xl   ${changeBgColor()} hover:bg-gray-900/30   overflow-hidden `}
                    >
                        <div className="w-full h-full">
                            <MessSecratariesMini/>
                        </div>
                    </div>
                    <div
                        className={`w-full p-4 transition-all duration-200 ease-in-out shadow-lg bg-gray-900/20 backdrop-blur-md h-1/2 rounded-2xl   ${changeBgColor()} hover:bg-gray-900/30   overflow-hidden `}
                    >
                        <div className="text-2xl font-semibold">Complaints</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
