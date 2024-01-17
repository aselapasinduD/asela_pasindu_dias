//Header Section
import React, { useState } from "react";

import './styles/header.css';

import NavigationBar from './navigation_bar';
import HeaderText from './header_text_update';
import Myphoto from '../assests/myphoto-small.png';

const myHeaders = ["Asela Pasindu Dias", "a Full Stack Developer", "a Software Engineer", "a UI/UX Designer"];

const Header = () => {
    const [ Loaded, IsLoaded ] = useState(false);

    if(Loaded){
        const element = document.getElementsByClassName("headerImage")[0];
        element.style.setProperty("--display-setnone2", "none");
        element.style.setProperty("--display-setblock2", "block");
    }

    return (
        <header id="header" data-testid="header" className="sections Header relative w-full h-Sheader ">
            <h3 className=" absolute w-max border-2 border-solid border-[#ff6600] bg-white/30 rounded-[10px] px-4 top-[320px] text-[1.3rem] ">
                Welcome to My Portfolio
            </h3>
            <HeaderText myHeaders={myHeaders} />
            <div className={` relative headerImage float-right w-[600px] h-[643.56px] mt-[24px] mb-[10px] `}>
                <img 
                    src={Myphoto}
                    alt="Person"
                    className={` flex relative object-center object-cover ${Loaded? "loaded": ""}`}
                    onLoad={() => IsLoaded(true)}
                />
            </div>
            <div className=" relative flex w-[100%] h-max justify-center ">
                <NavigationBar className=" w-full " />
            </div>
        </header>
    );
}

export default Header;