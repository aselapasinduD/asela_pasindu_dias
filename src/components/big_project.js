//Big Project Section
import React, { useState, useRef, useLayoutEffect } from "react";

import './styles/big_project_animation.css';

import MyPhoto2 from '../assests/myphoto2.png';

const projectList = [
    {
        Name: 'Data Scraping Software',
        Date: '10-2023',
        Details:['Collect users data from social media and use for markating', 'This software is made using python and telethon libiry. this software underconstraction and after constraction is done it will able to get users data from Telegram, WhatsApp, Facebook, etc.' ]
    },
    {
        Name: 'Project Name',
        Date: '2000-10',
        Details: ['Project Details', 'Project Purpose']
    },
    {
        Name: 'Project Name',
        Date: '2000-10',
        Details: ['Project Details', 'Project Purpose']
    },
    {
        Name: 'Project Name',
        Date: '2000-10',
        Details: ['Project Details', 'Project Purpose']
    },
    {
        Name: 'Project Name',
        Date: '2000-10',
        Details: ['Project Details', 'Project Purpose']
    },
    {
        Name: 'Project Name',
        Date: '2000-10',
        Details: ['Project Details', 'Project Purpose']
    }
]

const BigProject = () => {
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

    // More Details Button Handle
    const handleButtonClick = () => {
        console.log("Click Button");
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
                            <div className=" projectImageHolder relative max-w-[530px] h-1/2 rounded-[30px] overflow-hidden ">
                                <div className=" projectImageShining absolute flex gap-[8px] w-max h-[150%] z-[1]">
                                    <span className=" w-[26px] h-[100%] bg-white"></span>
                                    <span className=" w-[6px] h-[100%] bg-white"></span>
                                </div>
                                <div 
                                    className=" projectImage w-full h-full bg-cover bg-top "
                                    style={{
                                        backgroundImage: `url(${MyPhoto2})`
                                        }}
                                ></div>
                            </div>
                            <div className=" px-[10px]">
                                <h2 className=" projectName w-max text-[28px] font-semibold " ref={projectNameRefList[index]}>{project.Name}</h2>
                                <span className=" projectNameLine block w-[4px] h-[4px] bg-white rounded-[99999px] " ref={updateLineWidthRefList[index]}></span>
                                <p className=" text-[14px] ">{project.Date}</p>
                                <ul className=" projectDetailsAni mt-[10px] ">
                                    {project.Details.map((projectDetails, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className=" projectDetailSlide "
                                                style={{
                                                    fontSize: '18px'
                                                    }}
                                            >
                                                <p>{projectDetails}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <button
                                onClick={handleButtonClick}
                                className=" moreDetailsButton absolute w-max right-[34px] bottom-[14px] rounded-[4px] "
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