import React from "react";
import "../styles/components/SectionHeader.scss";

const SectionHeader = ({ headerText }) => {
    return <h1 className="heading">{headerText}</h1>;
};

export default SectionHeader;
