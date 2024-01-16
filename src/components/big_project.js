//Big Project Section
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

import './styles/big_project_animation.css';

import DefaultBanner from '../assests/myphoto2.png';
import MarkdownBanner from '../assests/project_images/Markdown-Editor-0.2v-2024-01-16.png';
import DataScrapingBanner from '../assests/project_images/Data-Scraping-0.1v-2024-01-16.png';
import FullStackAdminBanner from '../assests/project_images/Full-Stack-Adminl-2024-01-16.png';
import CrudderAppBanner from '../assests/project_images/Cruddur-App-2024-01-16.jpg';

// Blur Images
import MarkdownBannerBlur from '../assests/project_images/Markdown-Editor-0.2v-2024-01-16-blur.png';
import DataScrapingBannerBlur from '../assests/project_images/Data-Scraping-0.1v-2024-01-16-blur.png';
import FullStackAdminBannerBlur from '../assests/project_images/Full-Stack-Adminl-2024-01-16-blur.png';
import CrudderAppBannerBlur from '../assests/project_images/Cruddur-App-2024-01-16-blur.jpg';

const projectList = [
    {
        Name: 'Data Scraping Software',
        Date: '10-2023',
        Details:[ 'This software is made using python and telethon libiry. this software underconstraction and after constraction is done it will able to get users data from Telegram, WhatsApp, Facebook, etc.', 'Collect users data from social media and use for markating' ],
        image: DataScrapingBanner,
        imageBlur: DataScrapingBannerBlur,
        url: "https://github.com/aselapasinduD/Data_Scraping_Software"
    },
    {
        Name: 'Full Stack Admin',
        Date: '12-2023',
        Details: ['This is a admin side of a webpage. This web page is design using MERN Stack framework.', 'Project Purpose'],
        image: FullStackAdminBanner,
        imageBlur: FullStackAdminBannerBlur,
        url: "https://github.com/aselapasinduD/fullstack-admin-mern"
    },
    {
        Name: 'AWS bootcamp cruddur 2023',
        Date: '11-2023',
        Details: ['This is a bootcamp orgenaize by Andrew Brown(omenking). In this bootcamp we created cruddur app(twitter clone).', 'Purpose of this bootcamp is to learn about AWS and how professional developers are working together to create this app.'],
        image: CrudderAppBanner,
        imageBlur: CrudderAppBannerBlur,
        url: "https://github.com/aselapasinduD/aws-bootcamp-cruddur-2023"
    },
    {
        Name: 'Markdown Editor electron',
        Date: '12-2023',
        Details: ['This app is created as a fun project. I use vite-electron-builder template to create this app. and I use typescript as a mean language to create this app.', 'I create this app for learing purpose'],
        image: MarkdownBanner,
        imageBlur: MarkdownBannerBlur,
        url: "https://github.com/aselapasinduD/Markdown-Editor-electron"
    },
    {
        Name: 'Project Name',
        Date: '2000-10',
        Details: ['Project Details', 'Project Purpose'],
        image: '',
        imageBlur: '',
        url: "#"
    },
    {
        Name: 'Project Name',
        Date: '2000-10',
        Details: ['Project Details', 'Project Purpose'],
        image: '',
        iamgeBlur: '',
        url: "#"
    }
]

const BigProject = () => {
    const onLoadImageList = projectList.map(() => React.createRef());
    const loadingAnimationImageHolderList = projectList.map(() => React.createRef());
    // Get project name legnth
    const projectNameRefList = projectList.map(() => React.createRef());
    const updateLineWidthRefList = projectList.map(() => React.createRef());

    useLayoutEffect(() => {
        projectNameRefList.map((projectNameRef, index) => {
            updateLineWidthRefList[index].current.style.width = `${projectNameRef.current.offsetWidth}px`;
        });
    },[projectNameRefList]);

    // Scroll Function
    const itemsRef = useRef(null);
    const dragRef = useRef(null);
    const [ isMouseDown, setIsMouseDown] = useState(false);
    const [ startX, setStartX ] = useState(0);
    const [ scrollLeft, setScrollLeft] = useState(0);
    const [ showDrag, setShowDrag] = useState(false);

    const handleMouseMove = (event) => {
        setShowDrag(true);
        if(dragRef == null) return;
        dragRef.current.style.left = `${25 + event.pageX}px`;
        dragRef.current.style.top = `${25 + event.pageY}px`;

        if(itemsRef == null) return;
        if(!isMouseDown) return;
        event.preventDefault();
        const x = event.pageX - itemsRef.current.offsetLeft;
        const walk = (x - startX);
        itemsRef.current.scrollLeft = scrollLeft - walk;
    }

    const handleMouseDown = (event) => {
        setIsMouseDown(true);
        if(itemsRef == null) return;
        setStartX(event.pageX - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
    }

    const handleMouseLeave = () => {
        setIsMouseDown(false);
        setShowDrag(false);
    }

    const handleMouseUp = () => {
        setIsMouseDown(false);
    }

    // Image On Load
    const onLoadHandle = (index) => {
        onLoadImageList[index].current.style.opacity = 1;
        
        const element = document.getElementsByClassName("projectImageHolder")[index];
        element.style.setProperty('--display-setnone', 'none');
    }

    return (
        <div id="bigproject" data-testid="bigProject" className=" sections BigProject ">
            <h1>What I Did</h1>
            <div className=" projectBoxs max-w-max mx-[22px] pb-10 " >
                <span className={` dragBox absolute block w-max h-max px-[8px] py-[2px] rounded-[8px] z-[99999] overflow-hidden ${showDrag? "": "hidden"} `}
                 ref={dragRef}
                >
                    <p className=" text-[1.1rem] ">Drag</p>
                </span>
                <div className=" projectBoxsScroll grid grid-rows-1 grid-flow-col gap-[22px] overflow-x-scroll cursor-grab"
                    ref={itemsRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                {projectList.map((project, index) => {
                    return (
                        <div key={index}
                            className="
                                relative
                                projectBox
                                max-h-[27.0414vw]
                                max-w-[27.0414vw]
                                w-max
                                min-h-[300px]
                                min-w-[300px]
                                aspect-square
                                rounded-[30px]
                                text-left
                                flex-1
                                cursor-grab
                                "
                        >
                            <div 
                                className=" projectImageHolder relative max-w-[530px] h-1/2 rounded-[30px] overflow-hidden bg-cover bg-top "
                                style={{ backgroundImage: `url(${project.imageBlur})`}}
                                ref={loadingAnimationImageHolderList[index]}
                            >
                                <div className=" projectImageShining absolute flex gap-[8px] w-max h-[150%] z-[1]">
                                    <span className=" w-[26px] h-[100%] bg-white"></span>
                                    <span className=" w-[6px] h-[100%] bg-white"></span>
                                </div>
                                <img
                                    className=" projectImage w-full h-full object-cover object-top opacity-[0] "
                                    src={(project.image) === '' ? DefaultBanner : project.image}
                                    ref={onLoadImageList[index]}
                                    onLoad={() => onLoadHandle(index)}
                                />
                                
                            </div>
                            <div className=" px-[10px]">
                                <h2 className=" projectName w-max text-[1.6rem] font-semibold " ref={projectNameRefList[index]}>{project.Name}</h2>
                                <span className=" projectNameLine block w-[4px] h-[4px] bg-white rounded-[99999px] " ref={updateLineWidthRefList[index]}></span>
                                <p className=" text-[0.8rem] ">{project.Date}</p>
                                <ul className=" projectDetailsAni mt-[10px] ">
                                    {project.Details.map((projectDetails, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className=" projectDetailSlide "
                                                style={{
                                                    fontSize: '1.05rem'
                                                    }}
                                            >
                                                <p>{projectDetails}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <button
                                className=" moreDetailsButton absolute text-[1.1rem] w-max right-[34px] bottom-[14px] rounded-[4px] "
                                onClick={() => {window.open(project.url, "_blank")}}
                            >
                                More Details
                            </button>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    );
}

export default BigProject;