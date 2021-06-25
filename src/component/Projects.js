import React from "react";
import { WebCard } from "./WebCard";

export const Projects = () => {
    const pocketProps = {
        imageUrl:
            "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        imageTitle: "First Project",
        projectName: "Pocket",
        projectBody: "This is a budgeting application",
        projectLink: "",
        githubLink: "",
    };
    return (
        <div className="projects">
            <h1>Projects</h1>
            <WebCard pocketProps={pocketProps} />
        </div>
    );
};
