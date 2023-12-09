//Skills Sections
import React, { useEffect, useState, useRef } from "react";

import './styles/skill_box_percentage.css';

const skillBoxs = [
    ['Full Stack Development', 80, 
        [
            ['Next.js', 'Node.js', 'Angular'],
            ['React js', 'PHP', 'MySQL']
        ]
    ],
    ['Problem Solving', 90,
        [
            ['Analysis', 'Communication', 'Emotional Intelligence', 'Teamwork'],
            ['Research', 'Adaptability', 'Decision-making', 'Creativity']
        ]
    ],
    ['Software Engineer', 60,
        [
            ['Programming Languages', 'Data Structures', 'VCS', 'Testing & Debugging' ],
            ['Problem-Solving', 'Communication', 'Time Management', 'Continuous Learning' ]
        ]
    ],
    ['UI/UX Design', 80,
        [
            ['UX Research', 'Figma', 'Photoshop', 'Wireframing', 'Prototyping' ],
            ['Empathy', 'Collaboration', 'Critical Thinking' ]
        ]
    ]
];

const percentageBox = (percentage, boxSize) => {

    const percentageBarSize = 15;
    const strokeDasharray = 1214;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * (percentage / 100)); 

    if (boxSize !== undefined) {
    return (
        <div className=" skillPercentageOuter absolute rounded-[40px] "
            style={{
                width: boxSize.width + 'px',
                height: boxSize.height + 'px'
            }}>
            <div className=" skillPercentageInner absolute rounded-[22.5px] "
                style={{
                    width: (boxSize.width - percentageBarSize * 2) + 'px',
                    height: (boxSize.height - percentageBarSize * 2) + 'px',
                    top: percentageBarSize + 'px',
                    left: percentageBarSize + 'px'
                }}></div>

            <svg width={`${boxSize.width}`} height={`${boxSize.height}`} className=" skillPercentage ">
                <rect 
                    x={`${percentageBarSize/2}`}
                    y={`${percentageBarSize/2}`}
                    rx='30' ry='30'
                    width={`${boxSize.width - percentageBarSize}`}
                    height={`${boxSize.height - percentageBarSize}`}
                    style={{
                        strokeWidth: percentageBarSize,
                        strokeDasharray: strokeDasharray,
                        strokeDashoffset: strokeDashoffset,
                    }}
                />
            </svg>
        </div>
        )
    }
}


const Skills = () => {

    const getSkillBoxSizes = useRef([]);
  
    const [boxSizes, getBoxSizes] = useState([]);

    useEffect(() => {
        getBoxSizes(getSkillBoxSizes.current.map(getSkillBoxSize => ({
            width: getSkillBoxSize ? getSkillBoxSize.offsetWidth : 0,
            height: getSkillBoxSize ? getSkillBoxSize.offsetHeight : 0
        })));
    },[getSkillBoxSizes]);

    const getElements = (element) => {
        if (element && !getSkillBoxSizes.current.includes(element)) {
            getSkillBoxSizes.current.push(element);
        }
    }

    return (
        <div id="skills" data-testid="skills" className=" sections Skills flex flex-col items-center ">
            <h1 className=" mb-4 ">What I Can Do</h1>
            <div className=" skillBoxs w-max grid grid-cols-3 gap-10 mb-12 ">
                    {skillBoxs.map((skillbox, index) => {
                        return (
                            <div key={index} ref={getElements} className=" skillBox bg-gray-400/50 rounded-[40px] h-fit ">
                                {boxSizes !== [] ? percentageBox(skillbox[1], boxSizes[index]): ''}
                                <div key={`${index}.1`} className=" max-w-[200px] flex flex-col items-center mx-[60px] my-[22px] ">
                                    <h3 key={`${index}.1`} className=" flex-1 text-[24px] ">{skillbox[0]}</h3>
                                    <h1 key={`${index}.2`} className=" flex-1 text-[48px] " values={skillbox[1]}>{skillbox[1]}%</h1>
                                    <div key={`${index}.3`} className=" flex-1 skillDescription flex space-x-3 ">
                                        {skillbox[2].map((section, index) => {
                                            return (
                                                <section key={index} className=" flex-1 ">
                                                    {section.map((item, index) => {
                                                        return (
                                                            <p key={index} className=" text-[20px] text-left">
                                                                {item}
                                                            </p>
                                                        )
                                                    })}
                                                </section>
                                            )
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
            </div>
        </div>
    );
}
export default Skills;