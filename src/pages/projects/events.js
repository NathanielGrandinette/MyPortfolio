const events = [
    {
        name: "Indiana Bigfoot Conference",
        type: "Full-Stack",
        objective: `The objective of this website is to provide the client with an informative and easy to use place for their customers to learn more about
                    upcoming events, purchase tickets/merchandise, as well as view information about speakers and vendors attending these events.`,
        services: `Ecommerce & Stripe checkout`,
        challenge: `Creating the Indiana Bigfoot Conference website involved a series of challenges that required adept handling of various aspects.
                    Managing speaker information and event schedules provided by the client required careful coordination to ensure real-time updates 
                    and accurate representation of the conference details. Incorporating a registration form for vendors and setting up ticket sales added 
                    complexity, demanding seamless integration with secure payment processing.

                    One notable challenge emerged with the implementation of the Stripe API for payment and product management. The unfamiliarity with this API 
                    posed a learning curve, requiring thorough understanding and testing to ensure secure transactions and smooth user interactions. Additionally, 
                    designing the website alongside client feedback and approvals showcased the flexibility and responsiveness of our development 
                    process. Adopting a mobile-first approach demonstrated a commitment to accessibility, ensuring a positive user experience across multiple 
                    devices. Overall, the project's challenges encompassed content coordination, integration of new technologies like the Stripe API, and 
                    complex design to meet both client expectations and the dynamic needs of an event website.`,
        images: ['indianabigfoot.png', 'indianabigfoot-shop.png', 'indianabigfoot-location.png'],
        description: `The indiana bigfoot conference is a website built with ReactJS. This site was built for a client hosting 
                      a conference for Bigfoot enthusiasts. Some of the key features of the site are allowing its followers 
                      to purchase tickets and various merchandise products using Stripe's API and product management system, 
                      learning more about the speakers and vendors attending, location information, as well as searching for 
                      nearby lodging.`,
        skillsUsed: ["React", "Express", "Node", "CSS", "React-Testing-Library", "Stripe API", "E-commerce"],
        date: "January 2024",
        github: 'https://github.com/wiserdeveloper/indiana-bigfoot-conference',
        live: 'https://www.indianabigfootconference.com/'
    },
    {
        name: "The-N-T Collection",
        type: "Full-Stack",
        objective: `The primary objective of the website is to provide users with a straightforward shopping experience through 
                    a well-designed interface and an interactive cart for seamless navigation. The focus on simplicity and 
                    interactivity aligns with creating a positive user experience.`,
        services: "Ecommerce & Content Management",
        challenge: `Creating an ecommerce site from scratch posed a set of significant challenges, 
                    showcasing both the complexity and depth of this project. One key challenge revolved around 
                    implementing secure user authentication and admin roles using JSON Web Tokens (JWT). Ensuring that user data 
                    is protected while allowing smooth access to authorized individuals required careful attention to detail 
                    in coding. Additionally, the integration of admin-specific features, such as product and user 
                    management, demanded an understanding of backend development to establish an efficient 
                    data handling processes.
                    
                    Another notable challenge was the orchestration of ecommerce functionalities. Enabling users to seamlessly add 
                    products to their carts, view and manage their selections, and complete transactions required intricate 
                    frontend and backend interactions. The coordination of these elements, including real-time updates and smooth cart 
                    management, posed technical challenges that demanded careful consideration and implementation. Furthermore, 
                    managing dynamic content and granting admin roles the ability to modify the product catalog added another layer of 
                    problem solving, requiring effective content management systems and backend logic. In overcoming these 
                    challenges, this project not only honed my development skills but also laid the foundation for a fully functional 
                    and secure ecommerce platform.`,
        images: ['The-N-T-Collection-screenshot.png', 'The-N-T-Collection-Admin.png', 'The-N-T-Collection-Wishlist.png'],
        description: `The-N-T-Collection is an ecommerce application built with ReactJS. Key features include user 
                      Authentication using JSON web tokens and bcrypt, admin roles allowing the ability to add, edit, delete 
                      and feature products, as well as grant or remove admin access to users. Users can browse products, view 
                      details, and add items to the cart.`,
        skillsUsed: ["React", "Express", "Axios", "Node", "MongoDB", "JWT", "Jest"],
        date: "June 2023",
        github: 'https://github.com/NathanielGrandinette/The-N-T-Collection',
        live: 'https://the-n-t-collection.vercel.app/'
    },
    {
        name: "Agenda-X Productivity",
        type: "Full-Stack",
        objective: "Create an easy to use task management system, implementing a calendar for ease of use. ",
        services: "Calendar Integration & Task Management",
        challenge: `The biggest challenge we had with this website was using the Google Calendar API to render a calendar on 
                     the page and then pass the tasks into said calendar to display them on the correct dates, we also 
                     implemented a drag and drop feature within that calendar that allows you to quickly extend, shorten or 
                     change dates of your tasks. 

                     We also added in a google sign in feature using Oauth2 allowing users to create an account using their 
                     Google account. We solved this problem by studying the Google API docs and testing out the various features 
                     to ensure proper functioning. `,
        images: ['productivity.webp'],
        description: `This project is focused on developing a todo list app that provides a streamlined and intuitive interface 
                      for managing tasks and staying organized using React. We used Oauth2 to allow users to sign in using a 
                      google account as well as JSON web tokens and requireAuth middleware for user authentication and 
                      authorization. Tasks and notes are stored in a MongoDB database as well as account settings.`,
        skillsUsed: ["React", "Express", "Axios", "MongoDB", "Node", "Oauth2", "JWT"],
        date: "March 2023",
        github: 'https://github.com/TimothyDanfield/Agenda-X-Productivity',
    },
    {
        name: "Connect 4",
        type: "UI/Frontend",
        objective: "Create an easy to use and stylish connect 4 game",
        services: "Gaming",
        challenge: `Developing a custom Connect 4 game using HTML, CSS, and JavaScript presented a set of engaging challenges. Ensuring a responsive user 
                    interface demanded careful styling and layout considerations in CSS, especially when accommodating the dynamic nature 
                    of the game board. Managing the game's logic and functionality in JavaScript posed its own difficulties, requiring complex coding to 
                    handle player moves, check for winning conditions, and update the game in real-time. Additionally, incorporating a visually appealing 
                    design for the game required a balance between aesthetics and functionality, adding an extra layer of complexity to the project. 
                    Overcoming these challenges showcased the integration of front-end technologies to create an interactive and 
                    enjoyable gaming experience.`,
        images: ['connect4.webp'],
        description: `This project is a classic Connect 4 game built entirely using vanilla JavaScript. Building this game required 
                      a deep understanding of JavaScript programming concepts such as variables, functions, and loops. We also had 
                      to develop advanced logic to detect when a player has won, as well as to prevent illegal moves such as placing 
                      pieces in already filled columns.`,
        skillsUsed: ["HTML", "CSS", "JavaScript"],
        date: "October 2022",
        github: 'https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-NathanielGrandinette',
    }
]

export default events