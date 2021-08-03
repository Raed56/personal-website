import React from "react";
import "../styles/components/Loader.scss";

const Loader = () => {
    return (
        <div className="loader-body">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
};

export default Loader;
