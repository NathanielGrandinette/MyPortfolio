import { Navbar, Container, Nav, NavDropdown, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './NavBar.css'

const NavBar = () => {
    const [toggle, setToggle] = useState()
    const [showLinks, setShowLinks] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return (
        <nav className="nav" style={{ height: showLinks ? '100%' : '5%' }}>
            {width < 990 ?
                <Container className='navbar2' style={{ minHeight: showLinks ? '100%' : '' }}>
                    <div className='nav-main'>
                        <div></div>
                        <Nav >
                            <Hamburger color="white" onToggle={() => setTimeout(() => setShowLinks(!showLinks))} />
                        </Nav>
                    </div>
                    {showLinks ?
                        <Container className='links-mobile'>
                            <Link to='/' className='navLink2'>
                                Home
                            </Link>
                            <Link to='/resume' className="navLink2" >
                                Resume
                            </Link>
                            <Link to='/projects' className='navLink2'>
                                Projects
                            </Link>
                            <Link to='/about' className='navLink2'>
                                About Me
                            </Link>
                            <Link to='/contact' className='navLink2'>
                                Contact Me
                            </Link>
                        </Container>
                        : ''}
                </Container> :
                <Container className='navbar'>
                    <Container className='links'>
                        <Link to='/' className='navLink'>
                            Home
                        </Link>
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
                    </Container>
                </Container>}

        </nav>
    )
}

export default NavBar