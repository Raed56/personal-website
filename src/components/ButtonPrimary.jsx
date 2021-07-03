import React from "react";
import "../styles/components/ButtonPrimary.scss";

const ButtonPrimary = ({ buttonText, href }) => {
    return (
        <a
            className="button-primary"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="button-primary-text">{buttonText}</span>
        </a>
    );
};

export default ButtonPrimary;
