import React from 'react';
import './projects.css';

const Projects = () => {
    const events = [
        {
            name: "Productivity App",
            image: 'productivity.jpg',
            description: "This project is focused on developing a todo list app that provides a streamlined and intuitive interface for managing tasks and staying organized using React. We used Oauth2 to allow users to sign in using a google account as well as JSON web tokens and requireAuth middleware for user authentication and authorization. Tasks and notes are stored in a MongoDB database as well as account settings.",
            skillsUsed: ["React", "Express", "Axios", "Node.js", "Oauth2", "JWT-Tokens"],
            date: "March 2023",
            github: 'https://github.com/TimothyDanfield/Agenda-X-Productivity',
            live: 'https://agendaxproductivity.herokuapp.com/'
        },
        {
            name: "Connect Four",
            image: 'connect4.png',
            description: "This project is a classic Connect 4 game built entirely using vanilla JavaScript. Building this game required a deep understanding of JavaScript programming concepts such as variables, functions, and loops. We also had to develop advanced logic to detect when a player has won, as well as to prevent illegal moves such as placing pieces in already filled columns. ",
            skillsUsed: ["HTML", "CSS", "JavaScript"],
            date: "October 2022",
            github: 'https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-NathanielGrandinette',
        },
        {
            name: "ChatBot",
            image: 'chatbot.jpg',
            description: "This project builds a conversational interface using React and an OpenAI API call using Axios as well as Node.js and Express for the backend, where users can input text and receive instant responses.",
            skillsUsed: ["React", "Express", "Axios", "OpenAI", "Node.js"],
            date: "January 2023"
        },
    ]
    return (
        <div className="timeline">
            <h1 style={{ marginTop: 50 }}>MY <span className="about-me-header-name">PROJECTS</span></h1>
            {events.map((event, index) => (
                <div key={event.id} className='timeline-event'>
                    <div className='timeline-events'>
                        <div className="timeline-event-content">
                            <div className="timeline-event-image">
                                <img src={event.image} alt={event.name} className='port-img' />
                            </div>
                            <div className='project-details'>
                                <h2>{event.name}</h2>
                                <div className="timeline-event-date">{event.date}</div>
                                <p className='project-description' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>{event.description}</p>
                                <p className='project-skills'>{event.skillsUsed.map((skill) => (
                                    <p style={{margin: '10px'}}>{skill} </p>
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