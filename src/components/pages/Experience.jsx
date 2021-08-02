import React from "react";
import "../../styles/components/Experience.scss";
import SectionHeader from "../SectionHeader";
import { Timeline, Event } from "../Timeline";

const Experience = () => {
    return (
        <div className="experience" id="experience">
            <div className="page-container">
                <SectionHeader headerText="Experience" />
                <div className="experience-timeline">
                    <Timeline>
                        <Event
                            interval={"Aug 2020 - Present"}
                            title={
                                "College of Engineering, University of South Florida"
                            }
                            subtitle={"-Teaching Assistant"}
                        >
                            I am currently working in this position; my primary
                            role is to assist the professor to conduct the
                            Foundations of Engineering class which has 80+
                            students. I also grade student assignments and aid
                            them with course materials. Furthermore, I organize
                            student groups and conduct breakout sessions.
                        </Event>
                        <Event
                            interval={"Jan 2020 - Apr 2020"}
                            title={
                                "University of  South Florida Dining Services"
                            }
                            subtitle={"-Cashier and Food Services Employee"}
                        >
                            I worked as a cashier at various Fast Food outlets
                            at the USF campus, including, Subway, Panda Express,
                            Moe’s Southwest Grill, 813 Eats, and USF Concessions
                            Store. My primary role was to manage the cash till,
                            cater to customers, maintain product stock, and
                            clean facilities.
                        </Event>
                        <Event
                            interval={"Aug 2018 - Aug 2019"}
                            title={"Academia School"}
                            subtitle={"-Private Tutor and Teaching Assistant"}
                        >
                            During my gap year in Bangladesh, I enjoyed working
                            as a teaching assistant for a high school
                            Mathematics teacher where I graded the assignments
                            of 100+ students in Pure and General Mathematics. I
                            also independently tutored 3 students in IGCSE ‘O’
                            Level and Advanced ‘A’ Level Physics, Chemistry, and
                            Mathematics.
                        </Event>
                        <Event
                            interval={"Jul 2018 - Nov 2018"}
                            title={"Jaago Foundation"}
                            subtitle={"-Project Development Intern"}
                        >
                            I did my first internship at{" "}
                            <span>
                                <a
                                    className="Jaago"
                                    href="https://www.jaago.com.bd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Jaago
                                </a>
                            </span>{" "}
                            - a large humanitarian organization that serves
                            underprivileged children in Bangladesh. I worked
                            under the project development team and primarily
                            assisted them in writing, reviewing, and
                            proof-reading grant applications which were sent to
                            various donor organizations. I was also in charge of
                            performing extensive background research on numerous
                            funding opportunities for the team.
                        </Event>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;
