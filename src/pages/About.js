import React, { useState, useContext } from 'react'
import ExperiencePanel from '../panels/ExperiencePanel'
import ProfileHeader from '../panels/ProfileHeader'
import SkillPanel from '../panels/SkillPanel'
import HobbyPanel from '../panels/HobbyPanel'
import { TabContainer } from '../styles/container-styles'
import AppContext from '../AppContext'
import { IsDesktop } from '../util/constant'
import { TabOffsetFromTop } from '../util/constant'

const About = () => {

  const [tabActive, setTabActive] = useState(0);

  const { screenSizeMode, scrollValue } = useContext(AppContext);


  const stickyTabStyle = {
    "position": "fixed",
    "top": screenSizeMode !== IsDesktop ? "47px" : "0px",
    "left": "0px",
    "width": "100vw",
    "zIndex": 25,
    "backgroundColor": "#77d2f3"
  };

  const isTabSticky = (scrollValue > TabOffsetFromTop)
  const appliedTabStyle = isTabSticky ? stickyTabStyle : {};
  const appliedTabClassName = isTabSticky ? "panel" : "panel is-shadowless is-primary half-bottom-margin";

  return (
    <>
      <div className="app-wrapper">
        <div className="container app-content">
          <h2>ABOUT</h2>
          <ProfileHeader />
          <div className="profile-body">
            <div className="columns">
              <div className="column is-8">

                <article className={appliedTabClassName} style={appliedTabStyle}>
                  <div className="tabs is-centered  is-toggle">
                    <ul>
                      <li className={tabActive === 0 ? "is-active" : ""} onClick={() => setTabActive(0)}><a>Experience</a></li>
                      <li className={tabActive === 1 ? "is-active" : ""} onClick={() => setTabActive(1)}><a>Skills</a></li>
                      <li className={tabActive === 2 ? "is-active" : ""} onClick={() => setTabActive(2)}><a>Hobbies</a></li>
                    </ul>
                  </div>
                </article>

                <div className="tabs-location">
                  <TabContainer isActive={0 === tabActive}>
                    <ExperiencePanel />
                  </TabContainer >
                  <TabContainer isActive={1 === tabActive}>
                    <SkillPanel />
                  </TabContainer>
                  <TabContainer isActive={2 === tabActive}>
                    <HobbyPanel />
                  </TabContainer>
                </div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default About
