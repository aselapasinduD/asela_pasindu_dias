//Header Section
import React from "react";

import './styles/header.css';

import NavigationBar from './navigation_bar';
import HeaderText from './header_text_update';
import Myphoto from '../assests/myphoto.png';

const myHeaders = ["Asela Pasindu", "a Full Stack Developer", "a Software Engineer", "a UI/UX Designer"]

const Header = () => {

    return (
        <header id="header" data-testid="header" className="sections Header relative w-full h-Sheader ">
            <h3 className=" absolute w-max border-2 border-solid border-white bg-white/30 rounded-[10px] px-4 top-[320px] text-[32px] ">Welcome to My Portfolio</h3>
            <HeaderText myHeaders={myHeaders} />
            <img src={Myphoto} alt="Person" className=" image w-[600px] float-right mt-[24px] mb-[10px] " />
            <NavigationBar className=" w-full " />
        </header>
    );
}

export default Header;