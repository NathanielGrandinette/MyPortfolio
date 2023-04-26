import { Row, Container, Col } from 'react-bootstrap'
import React, { useState, useEffect } from "react";
import './home.css'

const Home = () => {
    const [showWelcome, setShowWelcome] = useState()
    const [showHomeParagraph, setShowHomeParagraph] = useState()

    useEffect(() => {
        setTimeout(() => setShowWelcome(true), 500)
        setTimeout(() => setShowHomeParagraph(true), 1000)
    }, [])
    return (
        <div style={{ marginTop: '10rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Container style={{ height: 'fit-content', marginBottom: '50px' }}>
                <Row xs='12' style={{ justifyContent: 'center'}}>

                    {showWelcome &&
                        <Row className='showWelcome'>
                            <Col xs='12' md='3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1vh 2vh 2vh 1vh' }}>
                                <img as='Row' id='introPhoto' src='profile-photo.jpg' alt='' />
                            </Col>
                            <Col className='welcome'>
                                <h3 style={{ margin: '4rem auto' }}>
                                    Hi<span style={{ fontSize: '50px' }} className='wave'>&#128075;</span>i'm Nathaniel <span style={{ color: '#3498db' }}>Grandinette</span>. Welcome to my professional portfolio, showcasing my skills
                                    and expertise as a full stack web developer, dedicated to creating visually stunning and functional websites.
                                </h3>
                            </Col>
                        </Row>
                    }
                    {showHomeParagraph &&
                        <h5 className='home-paragraph' style={{ margin: '6rem auto' }}>
                            <div className='text-paragraph'>
                                <p>
                                    Welcome to my software developer portfolio! I am a Junior software developer with a passion for
                                    creating innovative and intuitive technology solutions. With a strong background in some of the
                                    most common programming languages, development frameworks and software design principles, I am
                                    confident in my ability to deliver high-quality, efficient code that meets the needs of my clients.
                                    My eagerness to learn new technologies and the willingness to work with a team makes me a valuable
                                    addition to any development project.
                                </p>
                                <p>
                                    I have experience working on various projects such as web development. My technical skills include proficiency in the Javascript
                                    language as well as experience with the popular framework React. I am familiar with tools such as Bootstrap, Node.js, express,
                                    etc, and I have experience using version control systems like Git.
                                </p>
                                <p>
                                    Whether you are looking for a developer to join your team, or for someone to take on a small
                                    project, I am here to help bring your ideas to life. I am always looking for new challenges and
                                    opportunities to learn and grow as a developer. I invite you to take a look at my portfolio and see for
                                    yourself the quality of my work and my dedication to producing excellent software solutions.
                                </p>
                            </div>
                        </h5>
                    }

                </Row>
            </Container>
        </div>
    )
}

export default Home