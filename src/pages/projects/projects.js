import React from 'react';
import './projects.css';

const Projects = () => {
    const events = [
        {
            name: "Connect Four",
            image: 'connect4.png',
            description: "This project is a classic Connect 4 game built entirely using vanilla JavaScript. The game features a simple and intuitive user interface that allows players to quickly and easily place their pieces on the board and compete against each other. Building this game required a deep understanding of JavaScript programming concepts such as variables, functions, and loops. We also had to develop advanced logic to detect when a player has won, as well as to prevent illegal moves such as placing pieces in already filled columns. ",
            date: "October 2022",
        },
        {
            name: "ChatBot",
            image: 'chatbot.jpg',
            description: "This project builds a conversational interface using React, where users can input text and receive instant responses. The goal is to improve the user experience through efficient support via a conversational interface.",
            date: "January 2023",
        },
        {
            name: "Productivity App",
            image: 'productivity.jpg',
            description: "This project is focused on developing a todo list app that provides a streamlined and intuitive interface for managing tasks and staying organized. Using React, we have built a powerful and user-friendly app that allows users to easily create and manage multiple todo lists, add and complete tasks, and set reminders to stay on top of deadlines. The goal of this project is to provide a better user experience by making it easy to stay organized and on top of tasks. Rather than relying on traditional pen and paper lists or complex project management software, our app provides a simple and efficient solution that can be accessed from anywhere.",
            date: "March 2023",
        },
    ]
    return (
        <div className="timeline">
            <h1 style={{marginTop: 50}}>MY <span className="about-me-header-name">PROJECTS</span></h1>
            {events.map((event, index) => (
                <div key={event.id} className='timeline-event'>
                    <div className="timeline-event-content">
                        <div className="timeline-event-image">
                            <img src={event.image} alt={event.name} style={{ height: 250, width: 250 }} />
                        </div>
                        <div>
                            <h2>{event.name}</h2>
                            <p style={{textAlign: 'justify', textJustify: 'inter-word', width: '75%', margin: '0 auto'}}>{event.description}</p>
                        </div>
                        <div className="timeline-event-date">{event.date}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;