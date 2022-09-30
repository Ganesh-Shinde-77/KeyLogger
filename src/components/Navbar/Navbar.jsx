import React from 'react'
import "../Navbar/Navbar.css";
import "../../index.css";
import "./First Icons/FirstRow";
import {TbKeyboardHide} from "react-icons/tb";
import FirstRow from './First Icons/FirstRow';

const Navbar = () => {
  return (
    <div className="whole__nav">
        <div className="nav__bar">
            <div className="right__nav">
                <TbKeyboardHide/> Key Logger
            </div>
            <div className="left__nav">
                <ul>
                    <li>Login</li>
                    <li>Admin Login</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>

        <div className="first__icons">
            <FirstRow/>
        </div>
    </div>
  )
}

export default Navbar