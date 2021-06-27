import React from "react";
import "../styles/components/WebCard.scss";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonPrimary } from "./ButtonPrimary";

export const WebCard = ({
    cardImage,
    cardTitle,
    cardBody,
    languageTags,
    githubLink,
    liveLink,
}) => {
    return (
        <div className="card">
            <div className="card-media">
                <img src={cardImage} alt="An image" />
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
                    {liveLink ? (
                        <div className="btn">
                            <ButtonPrimary
                                buttonText="Visit Site"
                                href={liveLink}
                            />
                        </div>
                    ) : null}
                    {githubLink ? (
                        <div className="btn">
                            <ButtonSecondary
                                buttonText="Github"
                                href={githubLink}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
