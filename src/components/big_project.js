//Big Project Section
import React from "react";

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

    return (
        <div id="bigproject" data-testid="bigProject" className=" sections BigProject">
            <h1>What I Did</h1>
            <div className=" projectBoxs grid grid-cols-3 gap-[22px] mx-[30px] pb-10 ">
                {projectList.map((project, index) => {
                    return (
                        <div key={index}
                            className="
                                projectBox
                                max-h-[530px]
                                max-w-[530px]
                                min-h-[300px]
                                min-w-[300px]
                                aspect-square
                                rounded-[30px]
                                overflow-hidden
                                text-left
                                "
                        >
                            <div className=" projectImageHolder max-w-[530px] h-1/2 rounded-[30px] overflow-hidden ">
                                <div 
                                    className=" projectImage w-full h-full bg-cover bg-top "
                                    style={{
                                        backgroundImage: `url(${MyPhoto2})`
                                        }}
                                ></div>
                            </div>
                            <div className=" px-[10px]">
                                <h2 className=" projectName text-[28px] z-[1] font-semibold ">{project.Name}</h2>
                                <p>{project.Date}</p>
                                <ul className=" projectDetailsAni ">
                                    {project.Details.map((projectDetails, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className=" projectDetailSlide "
                                                style={{
                                                    fontSize: '20px'
                                                    }}
                                            >
                                                <p>{projectDetails}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default BigProject;