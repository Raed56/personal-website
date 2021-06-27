import React from "react";
import "../styles/components/ButtonSecondary.scss";

export const ButtonSecondary = ({ buttonText, href }) => {
    return (
        <a className="button-secondary" href={href} target="_blank">
            <span className="button-secondary-text">{buttonText}</span>
        </a>
    );
};
