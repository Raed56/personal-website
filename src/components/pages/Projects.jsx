import React from "react";
import "../../styles/components/Projects.scss";
import SectionHeader from "../../components/SectionHeader";
import WebCard from "../../components/WebCard";
import PersonalWebImg from "../../assets/images/personal-website.png";
import PocketImg from "../../assets/images/pocket.png";
import GihubBattleImg from "../../assets/images/github-battle.png";
import TradingAppImg from "../../assets/images/trading-app.png";

const Projects = () => {
    return (
        <div className="project-container" id="projects">
            <div className="page-container">
                <SectionHeader headerText="Projects" />
                <div className="project-container-row">
                    <div className="project-container-col">
                        <WebCard
                            cardImage={PersonalWebImg}
                            cardTitle="Personal Website"
                            cardBody="This is the first iteration of my fully responsive personal website. It showcases all about me including skills, experiences, projects and contact information."
                            languageTags={["React", "Sass"]}
                            liveLink="https://github.com/Raed56"
                            githubLink="https://github.com/Raed56/personal-website"
                        />
                    </div>
                    <div className="project-container-col">
                        <WebCard
                            cardImage={PocketImg}
                            cardTitle="Pocket"
                            cardBody="This is a budget tracking application which keeps record of the income, expenses and net balance. This project was my first intro to backend technology."
                            languageTags={["NodeJs", "Express", "MongoDB"]}
                            liveLink="https://pocket-rn.herokuapp.com/"
                            githubLink="https://github.com/niloyKGhosh/pocket"
                        />
                    </div>
                </div>
                <div className="project-container-row">
                    <div className="project-container-col">
                        <WebCard
                            cardImage={TradingAppImg}
                            cardTitle="Trading Application"
                            cardBody="This is a trading application that allows a user to buy and sell stocks in a simulated text-based market. I learned a lot about object-oriented concepts here. "
                            languageTags={["OOP", "C++"]}
                            githubLink="https://github.com/Raed56/trading-app"
                        />
                    </div>
                    <div className="project-container-col">
                        <WebCard
                            cardImage={GihubBattleImg}
                            cardTitle="Github Battle"
                            cardBody="This is a mini game-app which compares two GitHub users. I built this through a React course and learned many concepts like hooks, routers, states, etc."
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
