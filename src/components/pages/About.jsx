import React from "react";
import "../../styles/components/About.scss";
import SectionHeader from "../SectionHeader";

const About = () => {
    return (
        <div className="about " id="about">
            <div className="page-container">
                <SectionHeader headerText="About" />
                <div className="about-text">
                    <p>
                        I am currently a Junior in the University of South
                        Florida pursuing a Computer Engineering degree. My knack
                        for gaming as a child always made me curious of the
                        realm between hardware and software. I'd love to tread
                        and explore between the dimensions throughout my career.
                        But when I am not building stuff, I am either playing
                        the guitar or making the perfect cup of hot chocolate.
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
