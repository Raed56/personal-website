import React from "react";
import "../styles/components/Button.scss";

export const Button = () => {
    return (
        <div className="button">
            <a href="#" target="_blank">
                Visit Site
            </a>
            <a
                href="https://github.com/Raed56/personal-website"
                target="_blank"
            >
                Github Link
            </a>
        </div>
    );
};
