import React from "react";
import "../styles/components/WebCard.scss";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonPrimary } from "./ButtonPrimary";

export const WebCard = ({
    cardTitle,
    cardBody,
    languageTags,
    githubLink,
    liveLink,
}) => {
    return (
        <div className="card">
            <div className="card-media">
                <img
                    src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="An image"
                />
            </div>
            <div className="card-body">
                <h2>{cardTitle}</h2>
                <p>{cardBody}</p>
                <div className="card-body-language">
                    <p>
                        <span className="card-body-language-built-with">
                            Built with:
                        </span>

                        {languageTags.map((languageTag, index) => {
                            return (
                                <span
                                    key={index}
                                    className="card-body-language-tags"
                                >
                                    #{languageTag}
                                </span>
                            );
                        })}
                    </p>
                </div>
                <div className="card-body-footer">
                    <div className="btn">
                        <ButtonPrimary
                            buttonText="Visit Site"
                            href={liveLink}
                        />
                    </div>
                    <div className="btn">
                        <ButtonSecondary
                            buttonText="Github"
                            href={githubLink}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
