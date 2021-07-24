import React from "react";
import "../../styles/components/About.scss";
import SectionHeader from "../SectionHeader";

const About = () => {
    return (
        <div className="about ">
            <div className="page-container">
                <SectionHeader headerText="About" />
                <div className="about-text">
                    <p>
                        I am currently pursuing a Computer Engineering degree in
                        the University of South Florida. My knack for gaming as
                        a child gave me a keen eye for details in all things
                        digital. I aspire to pursue a career in software
                        engineering. When I am not developing, I play the
                        guitar, some table tennis and make a cup of hot
                        chocloate.
                    </p>
                </div>

                <div className="about-info">
                    <div className="about-info-section">
                        <p className="about-info-section-heading">SKILLS</p>
                        <p className="about-info-section-subheading">
                            Languages:
                        </p>
                        <p className="about-info-section-content">
                            C/C++, Java, Javascript, HTML5, CSS3
                        </p>
                        <p className="about-info-section-subheading">
                            Frameworks:
                        </p>
                        <p className="about-info-section-content">
                            Sass, Node.js, Express.js, React, MongoDB, Mongoose
                        </p>
                        <p className="about-info-section-subheading">Tools:</p>
                        <p className="about-info-section-content">
                            Git, Github, VSCode, POSTMAN, Heroku, MongoDB
                            Compass, Figma
                        </p>
                    </div>
                    <div className="about-info-section">
                        <p className="about-info-section-heading">EDUCATION</p>
                        <p className="about-info-section-subheading">School:</p>
                        <p className="about-info-section-content">
                            University of South Florida
                        </p>
                        <p className="about-info-section-subheading">Major:</p>
                        <p className="about-info-section-content">
                            Bachelor of Science in Computer Engineering
                        </p>
                        <p className="about-info-section-subheading">GPA:</p>
                        <p className="about-info-section-content">3.96/4.00</p>
                    </div>
                    <div className="about-info-section">
                        <p className="about-info-section-heading">AWARDS</p>
                        <p className="about-info-section-subheading">
                            Presidential Scholarship & Honors College ($48000):
                        </p>
                        <p className="about-info-section-content">
                            Awarded for having an admission SAT of 1340+ and GPA
                            of 3.90+
                        </p>
                        <p className="about-info-section-subheading">
                            Dean’s List (Fall'19-Spring'21):
                        </p>
                        <p className="about-info-section-content">
                            Awarded for having a semester GPA of 3.90+
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
