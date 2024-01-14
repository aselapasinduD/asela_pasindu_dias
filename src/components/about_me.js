//About Me Section
import React from "react";
import MyPhoto2 from '../assests/myphoto2.png';

import './styles/about_me.css';

const AboutMe = () => {
    return (
        <div id="aboutme" data-testid="aboutMe" className=" sections AboutMe ">
            <h1>Who Am I</h1>
            <div className=" aboutMeDetails flex mb-10 ">
                <img className=" flex-1 max-w-[712px] m-[40px]" alt="Working" src={MyPhoto2} />
                <span className=" horizontalLine bg-[#FF6600] w-[2px] h-100% mx-2 rounded-full " ></span>
                <div className="paragraphs flex-1 mt-4 text-[24px] text-justify font-light ">
                    <p className=" paragraph-1 mb-5 font-bold ">
                        Hello. I'm Asela Pasindu Dias. I'm a multi-talented person who has over 4+ years of experience in a variety of design disciplines, coding, and research fields.
                    </p>
                    <p className=" paragraph-2 mb-5 ">
                        Additionally, I'm a software engineer with a focus on project management, UI/UX design, software development, and full-stack web development. I'm also interested in varieties of programming languages and the concept of disciplines in programming
                    </p>
                    <p className=" paragraph-3 mb-5 ">
                        I prefer not to use my past work to define who I am. I define myself by the work I want to do. Although personality cannot be taught, skills can. I prefer to continue learning, to challenge myself, and to engage in worthwhile activities.
                    </p>
                    <p className=" paragraph-4 mb-5 ">
                        I'm passionate about learning new things and conducting research. I have published on Medium.com about my research and my ideas. I'm an enthusiast of science, quantum physics, astronomy, and UAP (UFO).
                    </p>
                    <p className=" paragraph-5 ">
                        Over the course of my life and profession, I like to gain competence in a variety of subjects. I am an ENFJ-T personality type. I now conduct remote work with a chosen group of freelancing clients, but I'm always interested in new opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;