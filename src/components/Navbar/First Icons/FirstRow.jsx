import React from 'react'
import {FaNetworkWired} from "react-icons/fa";
import {FaGlobeAmericas} from "react-icons/fa";
import {RiWifiFill} from "react-icons/ri";
import {RiShieldStarFill} from "react-icons/ri";
import {SiHomeassistant} from "react-icons/si";
import {AiFillSetting} from "react-icons/ai";

import "./Firstrow.css";
import "../../../index.css";


const FirstRow = () => {
  return (
    <div className="first__row">

        <div className="first__rows__icons">
            <div className="f1__icons">
                <FaNetworkWired size = {40}/>
            </div>
            <div class = "first__row__text">
                Status
            </div>
        </div>

        <div className="first__rows__icons">
            <div className="f1__icons">
                <AiFillSetting size = {40}/>
            </div>
            <div class = "first__row__text">
                Keylogger Setting/logs
            </div>
        </div>

        <div className="first__rows__icons">
            <div className="f1__icons">
                <RiWifiFill size = {40}/>
            </div>
            <div class = "first__row__text">
                Detector
            </div>
        </div>

        <div className="first__rows__icons">
            <div className="f1__icons">
                <SiHomeassistant size = {40}/>
            </div>
            <div class = "first__row__text">
                Admin Settings
            </div>
        </div>

    </div>
  )
}

export default FirstRow