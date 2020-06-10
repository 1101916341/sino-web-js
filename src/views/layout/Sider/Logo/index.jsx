import React from "react";
import { Link } from 'react-router-dom'
import logo from "@/assets/images/logo.png";
import "./index.less";

const Logo = () => {
    return (
        <div className="sidebar-logo-container">
            <Link to="/dashboard"><img src={logo} className="sidebar-logo" alt="logo" /></Link>
        </div>
    );
};

export default Logo;
