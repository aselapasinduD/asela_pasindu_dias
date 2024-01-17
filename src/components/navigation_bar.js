//Navigation bar
import React, { useRef, useEffect, useState } from "react";

import './styles/navigation_bar.css';
import './styles/navigation_bar_animation.css';

import { SocialIcons } from "../assests/Icons/socialIcons";
// import { SocialIconsHover } from "../assests/Icons/socialIcons";

const sectionList = [
    {
        name: 'About me',
        url: '#aboutme'
    },
    {
        name: 'Skills',
        url: '#skills'
    },
    {
        name: 'Education',
        url: '#education'
    },
    {
        name: 'Big Projects',
        url: '#bigproject'
    },
    {
        name: 'Vepdrak Studio',
        url: '#'
    },
    {
        name: 'Blog Post',
        url: '#'
    }
];

const socialIconList = [
    {
        icon: SocialIcons().linkedin,
        url: "https://www.linkedin.com/in/asela-pasindu-dias-55a7a7210"
    },
    {
        icon: SocialIcons().github,
        url: "https://github.com/aselapasinduD"
    },
    {
        icon: SocialIcons().instagram,
        url: "https://www.instagram.com/asel_pasindu/"
    },
    {
        icon: SocialIcons().whatsapp,
        url: "https://wa.me/message/LZH7ESTX73MWD1"
    },
    {
        icon: SocialIcons().twitter,
        url: "https://twitter.com/Asela_Pasindu_D"
    },
    {
        icon: SocialIcons().youtube,
        url: "https://www.youtube.com/@aselapasindu"
    },
    {
        icon: SocialIcons().facebook,
        url: "https://web.facebook.com/AselPasindu"
    }
];

const NavigationBar = ({className}) => {
    // Get current width from list items to make dynamic bobl
    const navItemRef = useRef(null);
    const navBarRef = useRef(null);
    // const hoverIconRefList = socialIconList.map(() => React.createRef());
    const [currentWidth, getWith] = useState(0);
    const [elementWidth, getElementWidth] = useState(0);
    const [moveBobl, getMoveLocation] = useState(0);
    // const [ mouseHover, setMouseHover ] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            getWith(navItemRef.current.offsetWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleMouseEnter = (event) => {
        const width = event.currentTarget.offsetWidth;
        const rect = event.currentTarget.getBoundingClientRect();
        const navbarOffSetLeft = navBarRef.current.getBoundingClientRect().left;
        getMoveLocation(rect.x - navbarOffSetLeft);
        getElementWidth(width);
    }

    // const handleMouseLeave = () => {
    //     setMouseHover(false);
    // }

    // Create bobl using current width
    const [bobl, makeBobl] = useState(null);
    useEffect(() => {
        makeBobl(<span 
            className="bobl nav_animation absolute bg-[#4F4F4F]/60 h-[40px] ml-[5px] z-[-1] left:[1000px] rounded-full" 
            style={{
                width: (elementWidth !== 0 ? elementWidth - 10: currentWidth - 10) + 'px',
                left: `${moveBobl}px`
            }}></span>);
    }, [elementWidth, moveBobl, currentWidth ]);

    return (
        <nav data-testid=" navigationBar " ref={navBarRef} className={` NavigationBar relative max-w-[1180px] max-h-[50px] flex rounded-full items-center z-[3] bg-[#FFFFFF]/80 ${className} `} >
            <ul className=" Sections-Nav flex contents ">
                {sectionList.map((section, index) => {
                    return (
                        <li key={index} id={`navItem-${index}`} className=" flex-1 w-max h-[50px] inline-grid items-center text-black " ref={navItemRef} onMouseEnter={handleMouseEnter}>
                                <a className=" text-[1rem] " href={section.url}>{section.name}</a>
                        </li>
                    );
                })}
            </ul>
            <span id="line-1" className=" bg-[#ff6600] w-1 h-12 mx-[5px] rounded-full "></span>
            <ul className=" Social-Icons flex contents ">
                {socialIconList.map((icon, index) => {
                    return (
                        <li key={index} id={`icon-${index}`} className=" inline-grid items-center h-[50px] " onMouseEnter={handleMouseEnter}>
                            <a 
                                className=""
                                href={icon.url}
                                target="_blank"
                            >
                                {icon.icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {bobl}
        </nav>
    );
}

export default NavigationBar;