import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, fa } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { selectedLightColor } from '../util/color'

const About = () => {
  return (
    <>
      <div className="app-wrapper">
        <div className="container app-content">
          <h2>ABOUT</h2>
          <div className="profile-header has-text-centered">
            <div className="h-avatar is-xl">
              <img className="avatar" src="https://via.placeholder.com/150x150" />
              <img className="badge" src="https://via.placeholder.com/150x150" alt="" />
            </div>
            <h3 className="title is-4 is-narrow is-thin no-bottom-margin">Bob Pham</h3>
            <p className="light-text">
              Hey everyone, I'm a full-stack developer. I’m interested in software architechture, frontend frameworks<br />
              and containers. I’m currently learning python and machine learning.
            </p>
            <div className="profile-stats">
              <div className="profile-stat">
                <FontAwesomeIcon icon={faCodeBranch} color={selectedLightColor} />
                <span>78 Projects</span>
              </div>
              <div className="separator"></div>
              <div className="socials">
                <a> <FontAwesomeIcon icon={faLinkedin} color={selectedLightColor} /></a>
                <a> <FontAwesomeIcon icon={faGithub} color={selectedLightColor} /></a>
                <a> <FontAwesomeIcon icon={faCodepen} color={selectedLightColor} /></a>
              </div>
            </div>
          </div>
          <div className="profile-body">
            <div className="columns">
              <div className="column is-8">
                <div className="profile-card">
                  <div className="profile-card-section">
                    <div className="section-title">
                      <h4>About Me</h4>
                      <a href="/admin-profile-edit-1.html"></a>
                    </div>
                    <div className="section-content">
                      <p className="description">A full-stack developer with 12+ year experience, demonstrated history in Geospatial software industry.
                        I'm passionate about new technologies and constantly keep myself updated, enjoy working in a team. </p>
                    </div>
                  </div>
                  <div className="profile-card-section">
                    <div className="section-title">
                      <h4>Experience</h4>
                    </div>
                    <div className="section-content">
                      <div className="experience-wrapper">
                        <div className="experience-item">
                          <img src="https://via.placeholder.com/150x150"  alt="" />
                          <div className="meta">
                            <span className="dark-inverted">.Id (informed decisions)</span>
                            <span>
                              <span>Dec 2020 &nbsp;</span>
                              <span>&#8213;</span>
                              <span>&nbsp; Present</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
