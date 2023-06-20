import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './NavBar.css'

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return (
        <nav className="nav" style={{ height: showLinks ? '100%' : '75px' }}>
            {width < 990 ?
                <div className='navbar2' style={{ height: showLinks ? '100%' : '' }}>
                    <div className='nav-main'>
                        <div >
                            <Hamburger color="white" onToggle={() => setTimeout(() => setShowLinks(!showLinks))} />
                        </div>
                    </div>
                    {showLinks ?
                        <div className='links-mobile'>
                            <Link to='/' className='navLink2'>
                                Home
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
                        </div>
                        : ''}
                </div> :
                <div className='navbar1'>
                    <Container className='links'>
                        <Link to='/' className='navLink'>
                            Home
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
                </div>}

        </nav>
    )
}

export default NavBar