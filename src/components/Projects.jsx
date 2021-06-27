import React from "react";
import { WebCard } from "./WebCard";

export const Projects = () => {
    return (
        <div>
            <WebCard
                cardTitle="Personal Website"
                cardBody="This is the first iteration of my personal website that i built using React and Sass. It showcases all my skills, experiences, projects and contact information."
                languageTags={["React", "Sass"]}
                liveLink="https://github.com/Raed56"
                githubLink="https://github.com/Raed56/personal-website"
            />
        </div>
    );
};
