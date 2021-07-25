import React from "react";
import "../../styles/components/Experience.scss";
import SectionHeader from "../SectionHeader";
import { Timeline, Event } from "../Timeline";

const Experience = () => {
    return (
        <div className="experience">
            <div className="page-container">
                <SectionHeader headerText="Work" />
                <div className="experience-timeline">
                    <Timeline>
                        <Event
                            interval={"Aug 2020 - Present"}
                            title={
                                "College of Engineering, University of South Florida"
                            }
                            subtitle={"Teaching Assistant"}
                        >
                            Assisted the professor to conduct the Foundations of
                            Engineering class consisting of 80+ students.
                            Primarily graded student assignments and aided them
                            with course materials. Organized student groups and
                            conducted breakout sessions.
                        </Event>
                        <Event
                            interval={"Jan 2020 - Apr 2020"}
                            title={
                                "University of  South Florida Dining Services"
                            }
                            subtitle={"Cashier and Food Services Employee"}
                        >
                            Worked as a cashier at various Fast Food outlets at
                            the USF campus, including, Subway, Panda Express,
                            Moe’s Southwest Grill, 813 Eats, and USF Concessions
                            Store. Managed the cash till, catered to customers,
                            maintained product stock, and cleaned facilities.
                        </Event>
                        <Event
                            interval={"Aug 2018 - Aug 2019"}
                            title={"Academia School"}
                            subtitle={"Private Tutor and Teaching Assistant"}
                        >
                            Worked as a teaching assistant for a high school
                            Mathematics teacher. Graded the assignments of 100+
                            students in Pure and General Mathematics.Tutored 3
                            students in IGCSE ‘O’ Level and Advanced ‘A’ Level
                            Physics, Chemistry, and Mathematics.
                        </Event>
                        <Event
                            interval={"Jul 2018 - Nov 2018"}
                            title={"Jaago Foundation"}
                            subtitle={"Project Development Intern"}
                        >
                            Interned at a large humanitarian organization that
                            serves underprivileged children in Bangladesh.
                            Assisted in writing, reviewing, and proof-reading
                            grant applications to various donor organizations.
                            Performed extensive background research on numerous
                            funding opportunities for the team.
                        </Event>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;
