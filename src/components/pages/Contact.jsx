import React from "react";
import "../../styles/components/Contact.scss";
import SectionHeader from "../SectionHeader";
import { GitHub, Linkedin, Instagram, Mail } from "react-feather";

const Contact = () => {
    return (
        <div className="contact-container">
            <SectionHeader headerText="Contact" />
            <div className="contact-container-text">
                <p>I'd love to talk to you! Whether it be about</p>
                <p>
                    <span>opportunities</span>, <span>career</span>, or{" "}
                    <span>life</span> in general,
                </p>
                <p>find me at</p>
            </div>
            <div className="contact-container-icons">
                <div>
                    <Mail size={52} strokeWidth={1.3} />
                    <a href="mailto: rseraj@usf.edu">rseraj@usf.edu</a>
                </div>
                <div>
                    <Linkedin size={52} strokeWidth={1.3} />
                    <a
                        href="https://www.linkedin.com/in/rseraj/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        rseraj
                    </a>
                </div>
                <div>
                    <GitHub size={52} strokeWidth={1.3} />
                    <a
                        href="https://github.com/Raed56"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Raed56
                    </a>
                </div>
                <div>
                    <Instagram size={52} strokeWidth={1.3} />
                    <a
                        href="https://www.instagram.com/raed_seraj/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        raed_seraj
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
