import React from "react";
import "../styles/components/SectionHeader.scss";

export const SectionHeader = ({ headerText }) => {
    return (
        <div>
            <h1 className="heading">{headerText}</h1>
            <div className="border"></div>
        </div>
    );
};
