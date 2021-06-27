import React from "react";
import "../styles/components/Projects.scss";
import { SectionHeader } from "./SectionHeader";
import { WebCard } from "./WebCard";

export const Projects = () => {
    return (
        <div className="project-container">
            <SectionHeader />
            <div className="project-container-row">
                <div className="project-container-col">
                    <WebCard
                        cardImage="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        cardTitle="Personal Website"
                        cardBody="This is the first iteration of my personal website that i built using React and Sass. It showcases all my skills, experiences, projects and contact information."
                        languageTags={["React", "Sass"]}
                        liveLink="https://github.com/Raed56"
                        githubLink="https://github.com/Raed56/personal-website"
                    />
                </div>
                <div className="project-container-col">
                    <WebCard
                        cardImage="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        cardTitle="Pocket"
                        cardBody="This is a budgeting application which I built with a friend and it shows the income, expenses and the net balance. This project taught me a lot of things. Blah Blah Blah."
                        languageTags={["NodeJs", "Express", "MongoDB"]}
                        liveLink="https://pocket-rn.herokuapp.com/"
                        githubLink="https://github.com/niloyKGhosh/pocket"
                    />
                </div>
            </div>
            <div className="project-container-row">
                <div className="project-container-col">
                    <WebCard
                        cardImage="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        cardTitle="Trading Application"
                        cardBody="This is a trading application that I built using C++ and object-oriented concepts which allows the user to buy and sell stock in a simulated text-based market."
                        languageTags={["OOP", "C++"]}
                        githubLink="https://github.com/Raed56/trading-app"
                    />
                </div>
                <div className="project-container-col">
                    <WebCard
                        cardImage="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        cardTitle="Future MERN Application"
                        cardBody="Upcoming application which Niloy and I will be building over the summer 2021."
                        languageTags={["MongoDB", "Express", "React", "NodeJS"]}
                    />
                </div>
            </div>
        </div>
    );
};

/*
1. Use media querries for all images of project.
2 Gather high quality images for projects and edit them if needed
3. Fix the positioning around the elements of the card body 
so that all of them align properly wen displayed together.



*/
