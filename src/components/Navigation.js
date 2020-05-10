import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="navigation">
            <div className="home_btn"><Link to="/">Home</Link></div>
            <div className="about_btn"><Link to="/about">About</Link></div>
        </div>
    );
}

export default Navigation;