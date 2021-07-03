import React from "react";
import HeroImg from "../HeroImg";
import "../../styles/components/Home.scss";
import ButtonSecondary from "../../components/ButtonSecondary";

const Home = () => {
    return (
        <div className="homepage">
            <div>
                <HeroImg />
            </div>
            <div className="homepage-text">
                <p>
                    Hi there! I
                    <span className="homepage-text-theme-color">'</span>m
                </p>

                <p className="homepage-text-name homepage-text-theme-color">
                    Raed Seraj
                </p>

                <p>A Computer Engineer based in</p>

                <p>Tampa, FL, USA</p>

                <div className="resume-button">
                    <ButtonSecondary buttonText="Resume" href="#" />
                </div>
            </div>
        </div>
    );
};

export default Home;
