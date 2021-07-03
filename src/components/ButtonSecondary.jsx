import React from "react";
import "../styles/components/ButtonSecondary.scss";

const ButtonSecondary = ({ buttonText, href }) => {
    return (
        <a
            className="button-secondary"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="button-secondary-text">{buttonText}</span>
        </a>
    );
};

export default ButtonSecondary;
