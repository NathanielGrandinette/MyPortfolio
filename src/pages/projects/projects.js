import './projects.css'

const Projects = () => {
    /**/
    return (
        <div>
            <div style={{ margin: '50px auto' }}>
                <h1 style={{ height: '100%' }}>My <span style={{ color: '#3498db' }}>Projects</span></h1>
            </div>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                <div class="polaroid rotate_right">
                    <img src="chatbot.jpg" alt="Pulpit rock" width="250" height="213" />
                    <p class="caption">This project builds a conversational interface using React, where users can
                        input text and receive instant responses. The goal is to improve the user experience through efficient support via a conversational interface.
                    </p>
                </div>

            </span>


        </div>
    )
}

export default Projects