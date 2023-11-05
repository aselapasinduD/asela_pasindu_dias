//Header Section
import React from "react";

import './styles/header.css';

import NavigationBar from './navigation_bar';
import Myphoto from '../assests/myphoto.png';

const Header = () => {
    console.log("Render Header Section");
    return (
        <div id="header" data-testid="header" className="sections Header relative w-full bg-sky-500 h-Sheader ">
            <h3 className="absolute w-max border-2 border-solid border-black p-1 top-[320px] text-[32px] ">Welcome to My Portfolio</h3>
            <h1 className="absolute w-max top-[390px] text-[48px] tracking-[13px] font-light ">Hi! I'm a Full Stack Developer</h1>
            <img src={Myphoto} alt="Person" className="image w-[600px] float-right mt-[24px] mb-[10px]" />
            <NavigationBar className=" w-full " />
        </div>
    );
}

export default Header;