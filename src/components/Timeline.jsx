import React from "react";
import "../styles/components/Timeline.scss";

export const Timeline = ({ children }) => (
    <div className="timeline-container">
        <ul className="timeline">{children}</ul>
    </div>
);

export const Event = ({ title, subtitle, interval, children }) => (
    <li className="timeline-event">
        <label className="timeline-icon"></label>
        <div className="timeline-body">
            <p className="timeline-body-date">{interval}</p>
            <h3>{title}</h3>
            {subtitle && <p className="timeline-body-subtitle">{subtitle}</p>}
            <div className="timeline-body-description">
                <p>{children}</p>
            </div>
        </div>
    </li>
);
