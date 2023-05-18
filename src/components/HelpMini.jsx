import React, {useContext} from "react"
import {UserContext} from "../UserContext.jsx";
import {Link} from "react-router-dom";
import {UilExternalLinkAlt, UilMessage} from "@iconscout/react-unicons";

const HelpMini = () => {

    const {bgColor} = useContext(UserContext);
    const changeBgColor = () => {
        if (bgColor == true) {
            return "bg-gray-900/20 text-black";
        }
        if (bgColor == false) return "bg-white/10 text-white";
    };

    return (<div className={`w-full h-full flex flex-col  gap-4`}>
        <div className={`flex justify-between items-center`}>
            <span className={`text-lg font-semibold`}>Help</span>
            <Link to={"/user/help"}>
                <UilExternalLinkAlt/>
            </Link>
        </div>
        <div className={` flex flex-col justify-center items-center font-semibold gap-4`}>
            <div className={`flex flex-col justify-center items-center`}>
                <div className={`text-center`}>Need help regarding this site?</div>
                <div>Give suggestions?</div>
            </div>
            <Link to={"/user/help"} className={`flex justify-center items-center gap-4 rounded-2xl px-6 hover:bg-gray-900/30 duration-200 transition-all ease-in-out py-2 w-max ${changeBgColor()}`}>
                <span className={`text-lg font-semibold`}>Send</span>
                <UilMessage/>

            </Link>
        </div>
    </div>)
}

export default HelpMini