import React from "react";
import "../styles/components/SectionHeader.scss";

export const SectionHeader = ({ headerText }) => {
    return <h1 className="heading">{headerText}</h1>;
};
