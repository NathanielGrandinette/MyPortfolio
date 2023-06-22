import './about.css'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const About = ({ tone }) => {
    return (
        <div className="about-me-section">
            <div className="about-me-container">
                <h1 className="about-me-header">ABOUT <span className="about-me-header-name">ME</span></h1>
                <div className="about-me-content">
                    <div className="about-me-img-container">
                        <img src='/images/profile-photo.jpg' alt="profile picture" className="about-me-img" />
                    </div>
                    <div className="about-me-text-container">
                        <p className="about-me-text">
                            Welcome to my portfolio! As a highly skilled full stack web developer with expertise in the MERN stack
                            (MongoDB, Express.js, React.js, and Node.js), I bring a dynamic blend of technical proficiency and
                            creativity to the table. I am passionate about building user-friendly web applications that not only
                            meet clients' needs but also exceed expectations.

                            Beyond my technical prowess, I am a passionate learner who stays up-to-date with the latest trends and
                            technologies in the web development landscape. I am always seeking new challenges, and I thrive in fast-paced,
                            collaborative environments where innovation and creativity are valued.
                        </p>
                        <p className='about-me-text'>
                            If you're looking for a talented and versatile full stack web developer who can bring your vision to life
                            and create exceptional digital experiences, then I'm your perfect fit. Let's connect and embark on an exciting
                            journey together to revolutionize the digital world.
                        </p>
                    </div>
                </div>
                <div className='skills-container'>
                    <h2>Some of the technologies I have experience with</h2>
                    <div className='skills'>
                        <div style={{ backgroundColor: tone === 'light' ? 'bisque' : 'white', color: tone === 'dark' ? '#9CA3AF' : "" }}>
                            <img
                                src='/images/React-icon.svg.png'
                                alt='react'
                            />
                        </div>
                        <div style={{ backgroundColor: tone === 'light' ? 'bisque' : 'white', color: tone === 'dark' ? '#9CA3AF' : "" }}>
                            <img
                                src='/images/HTML5-logo.png'
                                alt='html'
                            />
                        </div>
                        <div style={{ backgroundColor: tone === 'light' ? 'bisque' : 'white', color: tone === 'dark' ? '#9CA3AF' : "" }}>
                            <img
                                src='/images/CSS-logo.png'
                                alt='css'
                            />
                        </div>
                        <div style={{ backgroundColor: tone === 'light' ? 'bisque' : 'white', color: tone === 'dark' ? '#9CA3AF' : "" }}>
                            <img
                                src='/images/JS-logo.png'
                                alt='javascript'
                            />
                        </div>
                        <div style={{ backgroundColor: tone === 'light' ? 'bisque' : 'white', color: tone === 'dark' ? '#9CA3AF' : "" }}>
                            <img
                                src='/images/express-logo.png'
                                alt='express'
                            />
                        </div>
                        <div style={{ backgroundColor: tone === 'light' ? 'bisque' : 'white', color: tone === 'dark' ? '#9CA3AF' : "" }}>
                            <img
                                src='/images/MongoDB_Logo.png'
                                alt='mongodb'
                            />
                        </div>
                    </div>
                </div>
                <div className="follow">
                    <h3>Follow Me</h3>
                    <div className="about-me-socials">
                        <a href="https://github.com/NathanielGrandinette"
                            className="about-me-social-link"
                            target="_blank"
                            style={{ backgroundColor: tone === 'light' ? 'white' : '#1E3851', color: tone === 'dark' ? '#9CA3AF' : "" }}
                        >
                            <i className="fab fa-github"><FaGithub size={30} /></i>
                        </a>
                        <a href="https://linkedin.com/in/nathaniel-grandinette"
                            className="about-me-social-link"
                            target="_blank"
                            style={{ backgroundColor: tone === 'light' ? 'white' : '#1E3851', color: tone === 'dark' ? '#9CA3AF' : "" }}
                        >
                            <i className="fab fa-linkedin"><FaLinkedin size={30} /></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About