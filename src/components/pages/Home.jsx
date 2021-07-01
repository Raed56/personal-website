import React from "react";
import HeroImg from "../HeroImg";
import "../../styles/components/Home.scss";

const Home = () => {
    return (
        <div className="homepage">
            <div>
                <HeroImg />
            </div>
            <div>Hello</div>
        </div>
    );
};

export default Home;
