import { Row, Container, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Projects from '../projects/projects';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsArrowDownCircle } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './home.css'

const Home = ({ tone }) => {

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

            <div className='home-container'>
                <div className="home-headshot">
                    <div className='home-intro-sentence'>
                        <h2 className='home-intro'>
                            Hi,<span className='wave'>&#128075;</span>I'm <span style={{ color: '#3498db' }}>Nathan</span>. <br />
                        </h2>
                        <div className='home-intro-job'>
                            <h4>A Full-Stack Developer</h4>
                            <a
                                href="./images/nathaniel's-resume.pdf"
                                download="nathaniel's-resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="home-button-resume"
                            >
                                <div className='download-resume'>
                                    <BsArrowDownCircle /><span className="sr-only">Download Resume</span>
                                </div>
                            </a>
                        </div>

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
                style={{ color: 'white', marginTop: '50px', height: '150' }}
                className="follow-me"
                data-aos="zoom-in"
                data-aos-duration='1000'>
                <div className='seperator-div'>
                    <span className='next-steps-span'></span><h2 className='next-steps-h2'>Follow Me</h2><span className='next-steps-span'></span>
                </div>
                <div 
                    className="home-social-links"
                    >
                    <a href="https://github.com/NathanielGrandinette" 
                        className="home-social-link" 
                        target="_blank"
                        style={{ backgroundColor: tone === 'light' ? 'white' : '#1E3851', color: tone === 'dark' ? "#9CA3AF" : 'black'}}
                        >
                        <i className="fab fa-github"><FaGithub size={30} /></i>
                    </a>
                    <a href="https://linkedin.com/in/nathaniel-grandinette" 
                        className="home-social-link" 
                        target="_blank"
                        style={{ backgroundColor: tone === 'light' ? 'white' : '#1E3851', color: tone === 'dark' ? '#9CA3AF' : ""}}
                        >
                        <i className="fab fa-linkedin"><FaLinkedin size={30} /></i>
                    </a>
                </div>
            </Container>
        </div>
    )
}

export default Home