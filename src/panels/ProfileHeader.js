import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { selectedPrimaryColor } from '../util/color'

const ProfileHeader = () => {
    return <>
        <div className="profile-header has-text-centered">
            <div className="h-avatar is-xl">
                <img className="avatar" src="https://via.placeholder.com/150x150" />
                <img className="badge" src="https://via.placeholder.com/150x150" alt="" />
            </div>
            <h3 className="title is-4 is-narrow is-thin no-bottom-margin">Bob Pham</h3>
            <p className="bio-introduction">
                Hey everyone, I'm a full-stack developer. I’m interested in software architechture, frontend frameworks<br />
                and containers. I’m currently learning python and machine learning.
            </p>
            <div className="profile-stats">
                <div className="profile-stat">
                    <FontAwesomeIcon icon={faUsers} color={selectedPrimaryColor} />
                    <span>50+ Relations</span>
                </div>
                <div className="separator"></div>
                <div className="profile-stat">
                    <FontAwesomeIcon icon={faCodeBranch} color={selectedPrimaryColor} />
                    <span>18 Projects</span>
                </div>
                <div className="separator"></div>
                <div className="socials">
                    <a> <FontAwesomeIcon icon={faLinkedin} color={selectedPrimaryColor} /></a>
                    <a> <FontAwesomeIcon icon={faGithub} color={selectedPrimaryColor} /></a>
                    <a> <FontAwesomeIcon icon={faCodepen} color={selectedPrimaryColor} /></a>
                </div>
            </div>
        </div>
    </>;
};

export default ProfileHeader;