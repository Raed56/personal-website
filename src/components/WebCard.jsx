import React from "react";
import "../styles/components/WebCard.scss";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonPrimary } from "./ButtonPrimary";

export const WebCard = () => {
    return (
        <div className="card">
            <div className="card-media">
                <img
                    src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="An image"
                />
            </div>
            <div className="card-body">
                <h2>Personal Website</h2>
                <p>
                    This is the first iteration of my personal website that i
                    built using React and Sass. It showcases all my skills
                    ,experiences, projects and contact information.
                </p>
                <div className="card-body-language">
                    <p>
                        <span className="card-body-language-built-with">
                            Built with:
                        </span>
                        <span className="card-body-language-tags">#React</span>
                        <span className="card-body-language-tags">#Sass</span>
                    </p>
                </div>
                <div className="card-body-footer">
                    <div className="btn">
                        <ButtonPrimary
                            buttonText="Visit Site"
                            href="https://github.com/Raed56"
                        />
                    </div>
                    <div className="btn">
                        <ButtonSecondary
                            buttonText="Github"
                            href="https://github.com/Raed56/personal-website"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
