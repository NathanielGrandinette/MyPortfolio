import { Navbar, Container, Nav, NavDropdown, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './NavBar.css'

const NavBar = () => {
    const [toggle, setToggle] = useState()
    const [showLinks, setShowLinks] = useState(false)


    return (
        <Navbar collapseOnSelect className="nav" expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                    Home
                </Link>
                {showLinks ?
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
                <Nav >
                    <Hamburger color="white" onToggle={() => setTimeout(() => setShowLinks(!showLinks))} />
                </Nav>
            </Container>

        </Navbar>
    )
}

export default NavBar