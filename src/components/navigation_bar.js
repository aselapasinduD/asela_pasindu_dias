//Navigation bar
import React, { useRef, useEffect, useState } from "react";

import './styles/navigation_bar.css';
import './styles/navigation_bar_animation.css';

import { SocialIcons } from "../assests/Icons/socialIcons";
import { SocialIconsHover } from "../assests/Icons/socialIcons";

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
    const hoverIconRefList = socialIconList.map(() => React.createRef());
    const [currentWidth, getWith] = useState(0);
    const [elementWidth, getElementWidth] = useState(0);
    const [moveBobl, getMoveLocation] = useState(0);
    const [ mouseHover, setMouseHover ] = useState(false);

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
        getMoveLocation(rect.left - 120);
        getElementWidth(width);
        setMouseHover(true);
    }

    const handleMouseLeave = () => {
        setMouseHover(false);
    }

    // Create bobl using current width
    const [bobl, makeBobl] = useState(null);
    useEffect(() => {
        makeBobl(<span 
            className="bobl nav_animation absolute bg-[#4F4F4F]/60 h-[50px] ml-[6px] z-[-1] rounded-full" 
            style={{
                width: (elementWidth !== 0 ? elementWidth - 12: currentWidth - 12) + 'px',
                transform: 'translateX(' + moveBobl + 'px)'
            }}></span>);
    }, [elementWidth, moveBobl, currentWidth ]);

    return (
        <nav data-testid=" navigationBar " className={` NavigationBar relative flex rounded-full items-center z-[3] bg-[#FFFFFF]/80 ${className} `} >
            <ul className=" Sections-Nav flex contents ">
                {sectionList.map((section, index) => {
                    return (
                        <li key={index} id={`navItem-${index}`} className=" flex-1 w-max h-[60px] inline-grid items-center text-black" ref={navItemRef} onMouseEnter={handleMouseEnter}>
                                <a className="contents" href={section.url}>{section.name}</a>
                        </li>
                    );
                })}
            </ul>
            <span id="line-1" className=" bg-[#ff6600] w-1 h-12 mx-[5px] rounded-full "></span>
            <ul className=" Social-Icons flex contents ">
                {socialIconList.map((icon, index) => {
                    return (
                        <li key={index} id={`icon-${index}`} className=" inline-grid items-center h-[60px] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a 
                                className="contents"
                                href={icon.url}
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