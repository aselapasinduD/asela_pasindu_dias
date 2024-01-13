//Education Section
import React from "react";

import './styles/education_animation.css';

const programingLanguage =[
    {
        language:'C#',
        reference: []
    },
    {
        language: "C++", 
        reference: []
    },
    {
        language: "PHP",
        reference: []
    },
    {
        language: "Python", 
        reference: [
            {
                name: "testing",
                url: "#"
            },
            {
                name: "testing1",
                url: "#"
            }
        ]
    },
    {
        language: "JavaScript",
        reference: []
    },
    {
        language: "HTML",
        reference: []
    },
    {
        language: "CSS",
        reference: [
            {
                name: "HackerRank CSS",
                url: "https://www.hackerrank.com/certificates/383ff2a6827c"
            },
            {
                name: 'testing one',
                url: '#'
            }
        ]
    },
    {
        language: "Java",
        reference: []
    }
];

const educationsQualificationSection = [
    {
        platformName:'UOM Open Learning - Full Stack Development',
        platformUrl:'https://open.uom.lk/fullstack-developer.html',
        courses: 
            [
                {
                    name: 'Python-1',
                    url: 'https://open.uom.lk/mod/customcert/view.php?id=675&downloadown=1'
                },
                {
                    name: 'Python-2',
                    url: 'https://open.uom.lk/lms/mod/customcert/view.php?id=838&downloadown=1'
                },
                {
                    name: 'Web Development-1',
                    url: 'https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1'
                },
                {
                    name: 'Web Development-2',
                    url: 'https://open.uom.lk/mod/customcert/view.php?id=839&downloadown=1'
                },
                {
                    name: 'Web Development-3',
                    url: '#'
                }
            ]
    },
    {
        platformName: 'FreeCodeCamp',
        platformUrl: 'https://www.freecodecamp.org/news/about/',
        courses:
            [
                {
                    name: 'Scientific Computing With Python',
                    url: 'https://www.freecodecamp.org/certification/asela/scientific-computing-with-python-v7'
                }, 
                {
                    name: 'Responsive Web Design',
                    url: 'https://www.freecodecamp.org/certification/asela/responsive-web-design'
                }, 
                {
                    name: 'JavaScript Algorithms and Data Structures',
                    url: '#'
                }, 
                {
                    name: 'Foundational C# With Microsoft',
                    url: 'https://www.freecodecamp.org/certification/asela/foundational-c-sharp-with-microsoft'
                }, 
            ]
    }
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
                                <p className={` languageName ${Language.reference.length !== 0 ? 'languageNameHover': ''} border-x-2 text-[32px] font-semibold overflow-hidden `}>{Language.language}</p>
                                    {Language.reference.map((certificat, index) => {
                                    return <a key={index} href={certificat.url} className=" hidden font-normal text-[26px] hover:text-sky-400 border-x-2 whitespace-nowrap overflow-hidden " rel="noreferrer" target="_blank" >
                                            {certificat.name}
                                        </a>
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
                                <h2 key={index + '.1'} className=" text-[32px] "><a href={items.platformUrl} className=" hover:text-sky-700 " rel="noreferrer" target="_blank">{items.platformName}</a></h2>
                                <span key={index + '.2'} className=" block bg-[#FF6600] w-[80px] h-[3px] translate-x-[-14px] rounded-full "></span>
                                <ul className=" flex text-[16px] text-center ">
                                    {items.courses.map((course, index) => {
                                        return (
                                            <li key={index} className=" flex-1 border-r-2 border-black px-2 last:border-none ">
                                                <a href={course.url} className=" hover:text-sky-700" rel="noreferrer" target="_blank" >
                                                    {course.name}
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