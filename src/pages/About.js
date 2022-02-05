import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faUsers } from '@fortawesome/free-solid-svg-icons'
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
            <p className="bio-description">
              Hey everyone, I'm a full-stack developer. I’m interested in software architechture, frontend frameworks<br />
              and containers. I’m currently learning python and machine learning.
            </p>
            <div className="profile-stats">
              <div class="profile-stat">
                <FontAwesomeIcon icon={faUsers} color={selectedLightColor} />
                <span>50+ Relations</span>
              </div>
              <div class="separator"></div>
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
                          <img src="https://via.placeholder.com/150x150" alt="" />
                          <div className="meta">
                            <span className="dark-inverted">Hexagon Safety & Infrastructure</span>
                            <span >
                              <span>Full-time &nbsp;</span>
                              <span>&#8213;</span>
                              <span>&nbsp; 7 yrs 5 mos</span>
                            </span>
                          </div>
                        </div>
                        <div className="timeline">
                          <div className="outer">
                            <div className="timeline-card">
                              <h5 className="subtitle is-6">Senior Software Developer (Public Safety)</h5>
                              <div className="timeperiod">
                                <span>
                                  <span>Jan 2019</span>
                                  <span>&#8213;</span>
                                  <span>Nov 2020</span>
                                  <span>(1 yr 11 mos)</span>
                                </span>
                              </div>
                              <div className="location-description">
                                <span>Melbourne, Australia</span>
                              </div>
                              <div className="key-description">
                                <ul >
                                  <li>Handle software release management process, work as release manager.</li>
                                  <li>Work as Devops manager, migrate TFS code to Azure DevOps, setting up build/release pipelines.</li>
                                  <li>Development & coordinate with other developers, testers, implementers and release manager.</li>
                                </ul>
                              </div>
                            </div>

                            <div className="timeline-card">
                              <h5 className="subtitle is-6">GIS Analyst Consultant/Senior Developer (Geospatial)</h5>
                              <div className="timeperiod">
                                <span>
                                  <span>Jul 2013</span>
                                  <span>&#8213;</span>
                                  <span>Dec 2018</span>
                                  <span>(5 yrs 6 mos)</span>
                                </span>
                              </div>
                              <div className="location-description">
                                <span>Auckland, New Zealand</span>
                              </div>
                              <div className="key-description">
                                <ul >
                                  <li>Consult/support clients on a wide range of Hexagon geospatial software.</li>
                                  <li>Involve in the whole software development cycle, design/develop/test/deploy software on the client environments, then provide support.</li>
                                  <li>Coordinate & provide technical advises for overseas team to do development.</li>
                                </ul>
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
        </div>
      </div >
    </>
  )
}

export default About
