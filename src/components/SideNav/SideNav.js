import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://instagram.fbom10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87301333_2788312581268074_8935804863783108608_n.jpg?_nc_ht=instagram.fbom10-1.fna.fbcdn.net&_nc_ohc=8Q81h-cxJsQAX_3_uOZ&oh=35f42dee7f61cade7be89e04961f3954&oe=5F4DADE1"
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