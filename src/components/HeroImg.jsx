import React from "react";
import "../styles/components/HeroImg.scss";
import myImage from "../assets/images/mypic.png";
import { motion } from "framer-motion";

const HeroImg = () => {
    const variant = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            transition: { duration: 3.5, ease: "easeInOut" },
        },
    };
    return (
        <div className="hero-img">
            <img src={myImage} alt="my picture" />
            <div className="hero-img-border">
                <svg
                    viewBox="0 0 456 456"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        variants={variant}
                        initial="hidden"
                        animate="visible"
                        d="M3 3.5C76.0855 4.00223 268.405 4.70536 453 3.5V453.5H3V3.5Z"
                        stroke="#4F46EF"
                        strokeWidth="5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default HeroImg;
