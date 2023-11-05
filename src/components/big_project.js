//Big Project Section
import React from "react";

import './styles/big_project_animation.css';

import MyPhoto2 from '../assests/myphoto2.png';

const projectList = [
    [
        'Project Name',
        ['Project Details', 'Project Date', 'Project Purpose']
    ],
    [
        'Project Name',
        ['Project Details', 'Project Date', 'Project Purpose']
    ],
    [
        'Project Name',
        ['Project Details', 'Project Date', 'Project Purpose']
    ],
    [
        'Project Name',
        ['Project Details', 'Project Date', 'Project Purpose']
    ],
    [
        'Project Name',
        ['Project Details', 'Project Date', 'Project Purpose']
    ],
    [
        'Project Name',
        ['Project Details', 'Project Date', 'Project Purpose']
    ]
]

const BigProject = () => {
    console.log("Render Big Projects Section");
    const boxWidth = 340;
    const boxHeight = 460;

    return (
        <div id="bigproject" data-testid="bigProject" className=" sections BigProject ">
            <h1>What I Did</h1>
            <div className=" projectBoxs grid grid-cols-3 gap-[30px] place-items-center mb-10 mx-[30px] ">
                {projectList.map((project, index) => {
                    return (
                        <div key={index} className=" flex projectBox width-max justify-center">
                            <div 
                                className={` imageAni absolute overflow-hidden rounded-[30px] z-[2] transform-gpu `}
                                style={{
                                    width: boxWidth,
                                    height: boxHeight
                                }}>
                                <img className=" absolute content h-[460px] object-cover " alt="Project" src={MyPhoto2} />
                            </div>
                            <ul className=" projectDetailsAni absolute flex flex-col space-y-[18px] text-left z-[1] ">
                                {project[1].map((projectDetails, index) => {
                                    return (<li key={index} style={{transform: 'translateX(' + (18 * index) +'%)', fontSize: '20px'}}>{projectDetails}</li>)
                                })}
                            </ul>
                            <h2 className=" projectName absolute text-[28px] z-[1] font-semibold ">{project[0]}</h2>
                            <div 
                                className=" backgroundAni bg-gray-300 rounded-[30px] "
                                style={{
                                    width: boxWidth,
                                    height: boxHeight
                                }}>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default BigProject;