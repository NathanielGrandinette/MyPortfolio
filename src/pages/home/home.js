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

            <Container className='home-container'>
                <img style={{height: '250px', width: "150px"}} src="nathan's-photo.png" />
                <span> Hi,<span style={{ fontSize: '50px' }} className='wave'>&#128075;</span>I'm <span style={{ color: '#3498db' }}>Nathan</span>.</span>
                <h3 style={{ margin: '4rem auto' }}>
                    Welcome to my professional portfolio. I am a Software Developer with a passion for creating innovative and intuitive technology solutions.
                </h3>
            </Container>
            <Container className='home-container'>
                <div className='seperator-div'>
                    <span className='next-steps-span'></span><h2 className='next-steps-h2'>Projects</h2><span className='next-steps-span'></span>
                </div>
                <Projects />
                <Button className='home-container-button'>
                    <Link to='/projects' style={{ textDecoration: 'none' }}>
                        Projects &gt;
                    </Link>
                </Button>
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
                    <Button className='home-container-button'>
                        <Link to='/contact' style={{ textDecoration: 'none' }}>
                            Contact Me
                        </Link>
                    </Button>
                    <Button className='home-container-button'>
                        <Link to='/about' style={{ textDecoration: 'none' }}>
                            Learn More &gt;
                        </Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Home