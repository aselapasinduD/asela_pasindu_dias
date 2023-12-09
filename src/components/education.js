//Education Section
import React from "react";

import './styles/education_animation.css';

const programingLanguage = [
    ['C#', []],
    ["C++", []],
    ["PHP", []],
    ["Python", [["testing", "#"], ["testing1", "#"]]],
    ["JavaScript", []],
    ["HTML", []],
    ["CSS", [["HackerRank CSS", "https://www.hackerrank.com/certificates/383ff2a6827c"],['testing one', '#']]],
    ["Java", []]
];
const educationsQualificationSection = [
    [
        ['UOM Open Learning - Full Stack Development', 'https://open.uom.lk/fullstack-developer.html'],
        [
            ['Python-1', 'https://open.uom.lk/mod/customcert/view.php?id=675&downloadown=1'],
            ['Python-2', 'https://open.uom.lk/lms/mod/customcert/view.php?id=838&downloadown=1'],
            ['Web Development-1', 'https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1'],
            ['Web Development-2', 'https://open.uom.lk/mod/customcert/view.php?id=839&downloadown=1'],
            ['Web Development-3', '#']
        ]
    ],
    [
        ['FreeCodeCamp', 'https://www.freecodecamp.org/news/about/'],
        [
            ['Scientific Computing With Python', 'https://www.freecodecamp.org/certification/asela/scientific-computing-with-python-v7'], 
            ['Responsive Web Design', 'https://www.freecodecamp.org/certification/asela/responsive-web-design'], 
            ['JavaScript Algorithms and Data Structures', '#'], 
            ['Foundational C# With Microsoft', '#'], 
        ]
    ]
]

const Education = () => {
    return (
        <div id="education" data-testid="education" className=" sections education ">
            <h1>What I Know</h1>
            <div className=" flex items-center education mb-10 ">
                <ul className=" language flex-1 flex flex-col space-y-5 my-10 ">
                    {programingLanguage.map((Language, index) => {
                        return (
                            <li key={index} className=" relative flex items-center justify-center ">
                                <p className={` languageName ${Language[1].length !== 0 ? 'languageNameHover': ''} border-x-2 text-[32px] font-semibold overflow-hidden `}>{Language[0]}</p>
                                    {Language[1].map((certificat, index) => {
                                    return <a key={index} href={certificat[1]} className=" hidden font-normal text-[26px] hover:text-sky-400 border-x-2 whitespace-nowrap overflow-hidden " rel="noreferrer" target="_blank" >{certificat[0]}</a>
                                    })}
                            </li>)
                    })}
                </ul>
                <div className=" flex mx-3 ">
                    <span className=" none absolute origin-left rotate-45 translate-x-[1px] block bg-[#FF6600] w-[18px] h-[3px] rounded-full "></span>
                    <span className=" absolute origin-left rotate-[135deg] translate-x-[2px] block bg-[#FF6600] w-[18px] h-[3px] rounded-full "></span>
                    <span className=" translate-y-[1px] block bg-[#FF6600] w-[3px] h-[600px] rounded-full "></span>
                </div>
                <div className=" flex-1 flex flex-col space-y-10 text-left ">
                    {educationsQualificationSection.map((items, index) => {
                        return (
                            <div key={index} className="">
                                <h2 key={index + '.1'} className=" text-[32px] "><a href={items[0][1]} className=" hover:text-sky-700 " rel="noreferrer" target="_blank">{items[0][0]}</a></h2>
                                <span key={index + '.2'} className=" block bg-[#FF6600] w-[80px] h-[3px] translate-x-[-14px] rounded-full "></span>
                                <ul className=" flex text-[16px] text-center ">
                                    {items[1].map((course, index) => {
                                        return (
                                            <li key={index} className=" flex-1 border-r-2 border-black px-2 last:border-none ">
                                                <a href={course[1]} className=" hover:text-sky-700" rel="noreferrer" target="_blank" >
                                                    {course[0]}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Education;