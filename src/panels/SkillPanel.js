import React from 'react';

import ProfileData from '../content/profile.json'
import SkillComp from '../components/SkillComp';


const SkillPanel = () => {
    return <>
        <div className="profile-card">
            <div className="profile-card-section">
                <div className="section-title">
                    <h4>Skills</h4>
                </div>
                <div className="section-content">
                    <div className="skill-wrapper">
                        {ProfileData.skills.skill_list.map((skill, index) => (
                            <SkillComp {...skill} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="profile-card-section">
                <div className="section-title">
                    <h4>Frameworks / Tools</h4>
                </div>
                <div className="section-content">
                    <div className="skill-wrapper">
                        {ProfileData.skills.tools.map((skill, index) => (
                            <SkillComp {...skill} key={index} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default SkillPanel;
