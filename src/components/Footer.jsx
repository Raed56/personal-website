import React from "react";
import "../styles/components/Footer.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container-text">
                <p>
                    <span>&copy; 2021 </span>Designed & Built by Raed Seraj
                </p>
                <p>
                    Hosted on{" "}
                    <a
                        href="https://www.netlify.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Netlify
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
