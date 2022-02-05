import React from 'react'
import IntroductionPanel from '../components/IntroductionPanel'
import ProfileHeader from '../components/ProfileHeader'
import SkillPanel from '../components/SkillPanel'
const About = () => {
  return (
    <>
      <div className="app-wrapper">
        <div className="container app-content">
          <h2>ABOUT</h2>
          <ProfileHeader />
          <div className="profile-body">
            <div className="columns">
              <div className="column is-8">
                <div className="tabs is-centered">
                  <ul>
                    <li><a>Experience</a></li>
                    <li className="is-active"><a>Skills</a></li>
                    <li><a>Hobbies</a></li>
                  </ul>
                </div>
                <div className="tabs-location">
                  <IntroductionPanel />
                  <SkillPanel />
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
