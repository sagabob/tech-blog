import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { selectedPrimaryColor } from '../util/color';
import profileData from '../content/profile.json';

const ProfileHeader = () => {
    return <>
        <div className="profile-header has-text-centered">
            <div className="h-avatar is-xl">
                <img className="avatar" src="https://via.placeholder.com/150x150" alt="personal-logo" />
                <img className="badge" src="https://via.placeholder.com/150x150" alt="location" />
            </div>
            <h3 className="title is-4 is-narrow is-thin no-bottom-margin">Bob Pham</h3>
            <p className="bio-introduction">
                {profileData.introduction[0]}
                <br />
                {profileData.introduction[1]}
            </p>
            <div className="profile-stats">
                <div className="profile-stat">
                    <FontAwesomeIcon icon={faUsers} color={selectedPrimaryColor} />
                    <span>{profileData.stat.connection}</span>
                </div>
                <div className="separator"></div>
                <div className="profile-stat">
                    <FontAwesomeIcon icon={faCodeBranch} color={selectedPrimaryColor} />
                    <span>{profileData.stat.projects}</span>
                </div>
                <div className="separator"></div>
                <div className="socials">
                    <a href={profileData.links.linkedin} target="_blank"  rel="noreferrer" > <FontAwesomeIcon icon={faLinkedin} color={selectedPrimaryColor} /></a>
                    <a href={profileData.links.github} target="_blank"  rel="noreferrer" > <FontAwesomeIcon icon={faGithub} color={selectedPrimaryColor} /></a>
                    <a href={profileData.links.codepen} target="_blank"  rel="noreferrer" > <FontAwesomeIcon icon={faCodepen} color={selectedPrimaryColor} /></a>
                </div>
            </div>
        </div>
    </>;
};

export default ProfileHeader;
