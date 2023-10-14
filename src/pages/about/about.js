import './about.css'
import React from 'react'
import Socials from '../../components/Socials/Socials';


const About = ({ tone }) => {
    const style = {
        backgroundColor: tone === 'light' ? 'bisque' : 'white',
        color: tone === 'dark' ? '#9CA3AF' : ""
    }
    return (
        <div className="about-me-section">
            <div className="about-me-container">
                <h1 data-testid="about-header" className="about-me-header">ABOUT <span className="about-me-header-name">ME</span></h1>
                <div className="about-me-content">
                    <div className="about-me-img-container">
                        <img src='/images/profile-photo.jpg' alt="profile picture" className="about-me-img" />
                    </div>
                    <div className="about-me-text-container">
                        <p data-testid="about-me-paragraph" className="about-me-text">
                            Welcome to my portfolio! As a full stack software developer with expertise in the MERN stack
                            (MongoDB, Express.js, React.js, and Node.js), I bring a blend of technical proficiency and
                            creativity to the table. I am passionate about building user-friendly web applications that not only
                            meet clients' needs but also exceed expectations.

                            Beyond my technical prowess, I am a passionate learner who stays up-to-date with the latest trends and
                            technologies in the web development landscape. I am always seeking new challenges, and I thrive in fast-paced,
                            environments where innovation and creativity are valued.
                        </p>
                        <p className='about-me-text'>
                            If you're looking for a full stack software developer who can bring your vision to life, 
                            then I'm your perfect fit. Let's connect and embark on an exciting
                            journey together.
                        </p>
                    </div>
                </div>
                <div className='skills-container'>
                    <h2>Some of the technologies I have experience with</h2>
                    <div className='skills'>
                        <div style={style}>
                            <img
                                src='/images/React-icon.svg.png'
                                data-testid="tech-imgs"
                                alt='react'
                            />
                        </div>
                        <div style={style}>
                            <img
                                src='/images/HTML5-logo.png'
                                data-testid="tech-imgs"
                                alt='html'
                            />
                        </div>
                        <div style={style}>
                            <img
                                src='/images/CSS-logo.png'
                                data-testid="tech-imgs"
                                alt='css'
                            />
                        </div>
                        <div style={style}>
                            <img
                                src='/images/JS-logo.png'
                                data-testid="tech-imgs"
                                alt='javascript'
                            />
                        </div>
                        <div style={style}>
                            <img
                                src='/images/express-logo.png'
                                data-testid="tech-imgs"
                                alt='express'
                            />
                        </div>
                        <div style={style}>
                            <img
                                src='/images/MongoDB_Logo.png'
                                data-testid="tech-imgs"
                                alt='mongodb'
                            />
                        </div>
                    </div>
                </div>
                <Socials tone={tone}/>
            </div>
        </div>

    );
};

export default About