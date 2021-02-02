import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://instagram.fbom10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87301333_2788312581268074_8935804863783108608_n.jpg?_nc_ht=instagram.fbom10-1.fna.fbcdn.net&_nc_ohc=KRmGoj4HjAgAX83FgV5&tp=1&oh=72a8b9ef6668728f8bc8f4a310e66efc&oe=6042E4E1"
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