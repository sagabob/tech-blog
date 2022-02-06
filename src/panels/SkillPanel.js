import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {metricGoodColor,metricTopColor,metricMediumColor} from '../util/color'

const SkillPanel = () => {
    return <>
        <div className="profile-card">
            <div className="profile-card-section">
                <div className="section-title">
                    <h4>Skills</h4>
                </div>
                <div className="section-content">
                    <div className="skill-wrapper">
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={90} text={`${90}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricTopColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">JavaScript</span>
                                    <span className="skill-description">10+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for years.</li>
                                    <li>Have advanced knowledge of the language.</li>
                                    <li>Last 5+ years, use more ES6 version.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={88} text={`${88}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricGoodColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">C#</span>
                                    <span className="skill-description">10+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for years.</li>
                                    <li>Solid & advanced understanding of the language, hand-son experience in developing many applications.</li>
                                    <li>Currently work with DotNet Framework 4.6 & DotNet Core 3.1, will upgrade to 5 soon.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={86} text={`${86}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricGoodColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">SQL</span>
                                    <span className="skill-description">10+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for years, primarily use in MSSQL.</li>                                    
                                </ul>
                            </div>
                        </div>
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={81} text={`${81}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricGoodColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">Python</span>
                                    <span className="skill-description">2+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for the last 2+ years.</li>
                                    <li>All the work on data analysis, wrangling, and machine learning.</li>    
                                    <li>Will use Python on WebFrameworks soon.</li>                               
                                </ul>
                            </div>
                        </div>
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={83} text={`${83}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricGoodColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">HTML5/CSS3</span>
                                    <span className="skill-description">7+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for years.</li>
                                    <li>Solid understanding of the languages, hand-son experience in developing many applications.</li>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-card-section">
                <div className="section-title">
                    <h4>Frameworks/Tools</h4>
                </div>
                <div className="section-content">
                    <div className="skill-wrapper">
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={88} text={`${88}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricGoodColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">React</span>
                                    <span className="skill-description">5+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for the last 5+ years.</li>
                                    <li>Solid understanding, hands-on experience in implementing many applications.</li>
                                    <li>Also work on other React frameworks <strong>Gastby and Nextjs</strong>.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={91} text={`${91}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricTopColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">ASP.NET MVC/API/EF</span>
                                    <span className="skill-description">7+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for years.</li>
                                    <li>Solid & advanced understanding of the frameworks, hand-son experience in developing many business applications.</li>
                                    <li>Currently work on DotNet Framework 4.6 & DotNet Core 3.1, will upgrade to 5 soon.</li>
                                </ul>
                            </div>
                        </div> 
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={81} text={`${81}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricGoodColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">Nodejs</span>
                                    <span className="skill-description">5+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for years.</li>
                                    <li>Solid understanding of the tool, hand-son experience in using the Nodejs in developing many Nodejs related applications.</li>                                    
                                </ul>
                            </div>
                        </div>   
                        <div className="skill-item-wrapper">
                            <div className="skill-item">
                                <div className="skill-metric">
                                    <CircularProgressbar value={86} text={`${86}`} styles={buildStyles({
                                        textSize: `30px`,
                                        pathColor: `${metricGoodColor}`,
                                        textColor: `#040508`
                                    })} />
                                </div>
                                <div className="meta">
                                    <span className="dark-inverted">Mongodb/FireStore (NoSQL)</span>
                                    <span className="skill-description">5+ years of experience </span>
                                </div>
                            </div>
                            <div className="skill-notes">
                                <ul >
                                    <li>Part of daily work for years.</li>
                                    <li>Solid & advanced understanding of the tools, hand-son experience in using the tools to developing many business applications (use GraphQl connection)</li>                                    
                                </ul>
                            </div>
                        </div>                           
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default SkillPanel;
