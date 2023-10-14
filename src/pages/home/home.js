import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import Projects from '../projects/projects';
import Socials from '../../components/Socials/Socials';
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
                        <h2 data-testid="intro-sentence" className='home-intro'>
                            Hi,<span className='wave'>&#128075;</span>I'm <span style={{ color: '#3498db' }}>Nathan</span>. <br />
                        </h2>
                        <div className='home-intro-job'>
                            <h3>A Full-Stack Developer</h3>
                            <a
                                href="./images/nathaniel's-resume.pdf"
                                download="nathaniel's-resume.pdf"
                                target="_blank"
                                data-testid="download-resume"
                                rel="noreferrer"
                                className="home-button-resume"
                                aria-label='Download Resume'
                            >
                                <div className='download-resume'>
                                    <BsArrowDownCircle /><span className="sr-only">Download Resume</span>
                                </div>
                            </a>
                        </div>

                    </div>
                    <img src="/images/developer-dark.svg" alt='developer' />
                </div>
            </div>
            <Container className='home-container'>
                <div className='seperator-div'>
                    <span className='next-steps-span' style={{ backgroundColor: tone === 'light' ? "black" : "white" }}></span><h2 className='next-steps-h2'>Projects</h2><span className='next-steps-span' style={{ backgroundColor: tone === 'light' ? "black" : "white" }}></span>
                </div>
                <Projects tone={tone}/>
                <Link to='/projects' className='home-buttons'>
                    More Projects
                </Link>
            </Container>
            <Socials tone={tone}/>
        </div>
    )
}

export default Home