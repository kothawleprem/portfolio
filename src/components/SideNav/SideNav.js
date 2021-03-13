import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://pbs.twimg.com/profile_images/1368812915965390851/n83dF28V_400x400.jpg"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Prem Kothawle</h2>
            <p className="subtitle">"Programming my Dreams"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                {/* <p className="section-list-element" onClick={() => handleSectionClick("certificates")}>Certificates</p> */}
            </div>
        </div>
    );
};
