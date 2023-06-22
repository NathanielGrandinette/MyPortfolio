import React, { useEffect } from 'react';
import AOS from 'aos'
import events from './events';
import 'aos/dist/aos.css'
import './projects.css';

const Projects = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="timeline">
            {window.location.pathname === '/projects' ? <h1 style={{ marginTop: 50 }}>MY <span className="about-me-header-name">PROJECTS</span></h1> : <h1></h1>}
            {events.map((event, index) => (
                <div key={event.id} className='timeline-event' data-aos="zoom-in" data-aos-duration='1000'>
                    <div className='timeline-events'>
                        <div className="timeline-event-content">
                            <div className="timeline-event-image">
                                <img src={`/images/${event.image}`} alt={event.name} className='port-img' />
                            </div>
                            <div className='project-details'>
                                <h2>{event.name}</h2>
                                <div className="timeline-event-date">{event.date}</div>
                                <p className='project-description' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>{event.description}</p>
                                <p className='project-skills'>{event.skillsUsed.map((skill) => (
                                    <p style={{ margin: '10px' }}>{skill} </p>
                                ))}
                                </p>
                                <div className='project-links'>
                                    {event.github ? <a href={event.github} target="_blank">Github</a> : ''}
                                    {event.live ? <a href={event.live} target="_blank">Live</a> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;