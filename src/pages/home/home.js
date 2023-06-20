import { Row, Container, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Projects from '../projects/projects';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './home.css'

const Home = () => {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            <div className='home-container'>
                <div className="home-headshot">
                    <div>
                        <h2>
                            Hi,<span className='wave'>&#128075;</span>I'm <span style={{ color: '#3498db' }}>Nathan</span>. <br />
                        </h2>
                        <h4>A Full-Stack Developer</h4>
                        <a
                            href="./images/nathaniel's-resume.pdf"
                            download="nathaniel's-resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="home-buttons"
                        >
                            <span className="sr-only">Download Resume</span>
                        </a>
                    </div>
                    <img src="developer-dark.svg" />
                </div>
            </div>
            <Container className='home-container'>
                <div className='seperator-div'>
                    <span className='next-steps-span'></span><h2 className='next-steps-h2'>Projects</h2><span className='next-steps-span'></span>
                </div>
                <Projects />
                <Link to='/projects' className='home-buttons'>
                    More Projects
                </Link>
            </Container>

            <Container
                style={{ color: 'white', marginTop: '50px' }}
                data-aos="zoom-in"
                data-aos-duration='1000'>
                <div className='text-paragraph-info'>
                    <div className='seperator-div'>
                        <span className='next-steps-span'></span><h2 className='next-steps-h2'>Next Steps</h2><span className='next-steps-span'></span>
                    </div>
                    <h5 style={{ marginTop: '50px' }}>
                        Whether you are looking for a developer to join your team, or for someone to take on a small
                        project, I am here to help bring your ideas to life. With a strong background in some of the
                        most common programming languages, development frameworks and software design principles, I am
                        confident in my ability to deliver high-quality, efficient code that meets the needs of my clients.
                        My eagerness to learn new technologies and the willingness to work with a team makes me a valuable
                        addition to any development project.
                    </h5>
                    <Link to='/contact' className='home-buttons'>
                        Contact Me
                    </Link>
                    <Link to='/about' className='home-buttons'>
                        Learn More
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Home