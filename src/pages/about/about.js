import './about.css'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Carousel, Container, Row, Col } from 'react-bootstrap'


const About = () => {
    return (
        <div className="about-me-section">
            <div className="about-me-container">
                <h1 className="about-me-header">ABOUT <span className="about-me-header-name">ME</span></h1>
                <div className="about-me-content">
                    <div className="about-me-text-container">
                        <p className="about-me-text">
                            Hello, my name is Nathaniel Grandinette and I am a web developer with a passion for creating beautiful and functional websites.
                            I have experience with a variety of technologies including JavaScript, React, and CSS. I am also familiar with
                            other technologies such as Node.js, MongoDB, and Git. I am constantly learning and experimenting with new technologies
                            to stay up to date with the latest web development trends.
                        </p>
                        <Container style={{ height: 'auto', marginBottom: '50px', float: 'left', width: '100%', backgroundColor: '' }}>
                            <h2>Skills</h2>
                            <Carousel xs='12' style={{ marginTop: '25px' }}>
                                <Carousel.Item interval={2000}>
                                    <img src='logo512.png' alt=''  style={{ width: '150px', height: '150px', borderRadius: '25%' }} />
                                    <p>React</p>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img src='/images/HTML5-logo.png' alt=''  style={{ width: '150px', height: '150px', borderRadius: '25%' }} />
                                    <p>HTML 5</p>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img src='/images/CSS-logo.png' alt='' style={{ width: '150px', height: '150px', borderRadius: '25%' }} />
                                    <p>CSS</p>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img src='/images/JS-logo.png' alt=''  style={{ width: '150px', height: '150px', borderRadius: '25%' }} />
                                    <p>JavaScript</p>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img src='/images/express-logo.png' alt=''  style={{ width: '150px', height: '150px', borderRadius: '25%' }} />
                                    <p>ExpressJS</p>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img src='/images/bootstrap-logo.png' alt=''  style={{ width: '150px', height: '150px', borderRadius: '25%' }} />
                                    <p>Bootstrap</p>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img src='/images/MongoDB_Logo.png' alt=''  style={{ width: '150px', height: '150px', borderRadius: '25%' }} />
                                    <p>MongoDB</p>
                                </Carousel.Item>
                            </Carousel>
                        </Container>
                    </div>
                    <div className="about-me-img-container">
                        <img src='profile-photo.jpg' alt="profile picture" className="about-me-img" />
                        <div className="about-me-social-links">
                            <a href="https://github.com/NathanielGrandinette" className="about-me-social-link" target="_blank">
                                <i className="fab fa-github"><FaGithub size={60} /></i>
                            </a>
                            <a href="https://linkedin.com/in/nathaniel-grandinette" className="about-me-social-link" target="_blank">
                                <i className="fab fa-linkedin"><FaLinkedin size={60} /></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-me-text-container2">

                    <div id='container1'>
                        <Row xs='12'>
                                <Col xs='12' md='6' lg='4' className='text'>
                                    <h4>Career</h4>
                                    <p className="about-me-text">
                                        I started my career in the restaurant industry at the age of 16 and have worked in that industry until 2022. I have 2 years of Restaurant Management experience as well as many more years in supervisory roles.
                                        In total I have 5 years of experience in a management position, where I have honed my leadership and problem-solving skills. My experience has taught me the importance of attention to detail, time management, and the ability to work well under pressure.
                                        My tech journey started in July of 2022 when I joined Kenzie Academy for a Full Stack Web Developer Certificate with an expected graduation date of April 2023.
                                    </p>
                                </Col>
                                <Col xs='12' md='6' lg='4' className='text'>
                                    <h4>Family</h4>
                                    <p className="about-me-text">
                                        As a dedicated father of three, I have honed my skills in time management, multitasking, and
                                        problem-solving. Raising children requires patience, flexibility, and the ability to think on your feet,
                                        all of which are traits that I possess. My experience as a parent has also taught me the importance of
                                        clear and effective communication, as well as the ability to adapt to changing situations. These skills,
                                        coupled with my passion and drive, make me a strong candidate for any position that values hard work,
                                        dedication, and the ability to work well under pressure.
                                    </p>
                                </Col>
                                <Col xs='12' md='6' lg='4' className='text' >
                                    <h4>Projects</h4>
                                    <p className="about-me-text">....in progress</p>
                                </Col>
                        </Row>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default About