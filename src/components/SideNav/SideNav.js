import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQF1nv_H-SKXDQ/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=TLnuLRM4Aw3jVeYbxAqfZsRGxvbtjwLiGKeB7pszNg4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Prem Kothawle</h2>
            <p className="subtitle">"Programming my Dreams"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};