//Header Section
import React, { useState } from "react";

import './styles/header.css';

import NavigationBar from './navigation_bar';
import HeaderText from './header_text_update';
// import Myphoto from '../assests/myphoto.png';
import Myphoto from '../assests/myphoto-small.png';
import MyphotoBlur from '../assests/myphoto-blur.png'; 

const myHeaders = ["Asela Pasindu", "a Full Stack Developer", "a Software Engineer", "a UI/UX Designer"]

const Header = () => {
    const [ Loaded, IsLoaded ] = useState(false);
    return (
        <header id="header" data-testid="header" className="sections Header relative w-full h-Sheader ">
            <h3 className=" absolute w-max border-2 border-solid border-white bg-white/30 rounded-[10px] px-4 top-[320px] text-[32px] ">Welcome to My Portfolio</h3>
            <HeaderText myHeaders={myHeaders} />
            <div className=" image float-right w-[600px] h-[643.56px] h-max mt-[24px] mb-[10px] bg-cover bg-center " style={{backgroundImage: `url(${MyphotoBlur})`}}>
                <img 
                    src={Myphoto}
                    alt="Person"
                    className={`object-center object-cover ${Loaded? "": "hidden loaded"}`}
                    onLoad={() => IsLoaded(true)}
                />
            </div>
            <NavigationBar className=" w-full " />
        </header>
    );
}

export default Header;