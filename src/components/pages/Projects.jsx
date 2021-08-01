import React from "react";
import "../../styles/components/Projects.scss";
import SectionHeader from "../../components/SectionHeader";
import WebCard from "../../components/WebCard";
import PersonalWebImg from "../../assets/images/personal-website.png";

const Projects = () => {
    return (
        <div className="project-container" id="projects">
            <div className="page-container">
                <SectionHeader headerText="My Projects" />
                <div className="project-container-row">
                    <div className="project-container-col">
                        <WebCard
                            cardImage={PersonalWebImg}
                            cardTitle="Personal Website"
                            cardBody="This is the first iteration of my personal website that i built using React and Sass. It showcases all my skills, experiences, projects and contact information."
                            languageTags={["React", "Sass"]}
                            liveLink="https://github.com/Raed56"
                            githubLink="https://github.com/Raed56/personal-website"
                        />
                    </div>
                    <div className="project-container-col">
                        <WebCard
                            cardImage=""
                            cardTitle="Pocket"
                            cardBody="This is a budgeting application which I built with a friend and it shows the income, expenses and the net balance. This project taught me a lot of things."
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
                            cardTitle="Github Battle"
                            cardBody="This is a mini game-app which compares two GitHub users. I built this through a React course and learned about concepts like hooks, routers, states, etc."
                            languageTags={["React", "Github API"]}
                            liveLink="https://rseraj-github-battle.netlify.app/"
                            githubLink="https://github.com/Raed56/github-battle"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
