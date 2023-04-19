import { Navbar, Container, Nav, NavDropdown, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './NavBar.css'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <Navbar collapseOnSelect className="nav" expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                    Home
                </Link>
                <Nav >
                    <Hamburger color="white" onToggle={setToggle} />
                </Nav>
            </Container>
            {toggle ?
                <Container className='links'>

                    <Link to='/resume' className="navLink" >
                        Resume
                    </Link>
                    <Link to='/projects' className='navLink'>
                        Projects
                    </Link>
                    <Link to='/about' className='navLink'>
                        About Me
                    </Link>
                    <Link to='/contact' className='navLink'>
                        Contact Me
                    </Link>
                </Container> : ''}
        </Navbar>
    )
}

export default NavBar