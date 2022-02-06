import React, { useState } from 'react'
import IntroductionPanel from '../panels/IntroductionPanel'
import ProfileHeader from '../panels/ProfileHeader'
import SkillPanel from '../panels/SkillPanel'
import HobbyPanel from '../panels/HobbyPanel'
import styled from 'styled-components'





const About = () => {

  const [tabActive, setTabActive] = useState(0);

  const TabContainer = styled.div` 
     display: ${props => props.isActive ? "block" : "none"};  
  `;

  return (
    <>
      <div className="app-wrapper">
        <div className="container app-content">
          <h2>ABOUT</h2>
          <ProfileHeader />
          <div className="profile-body">
            <div className="columns">
              <div className="column is-8">
                <div className="tabs is-centered is-toggle half-bottom-margin">
                  <ul>
                    <li className={tabActive === 0 ? "is-active" : ""} onClick={() => setTabActive(0)}><a>Experience</a></li>
                    <li className={tabActive === 1 ? "is-active" : ""} onClick={() => setTabActive(1)}><a>Skills</a></li>
                    <li className={tabActive === 2 ? "is-active" : ""} onClick={() => setTabActive(2)}><a>Hobbies</a></li>
                  </ul>
                </div>
                <div className="tabs-location">
                  <TabContainer isActive={0 === tabActive}>
                    <IntroductionPanel />
                  </TabContainer >
                  <TabContainer isActive={1 === tabActive}>
                    <SkillPanel />
                  </TabContainer>
                  <TabContainer isActive={2 === tabActive}>
                    <HobbyPanel />
                  </TabContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default About
