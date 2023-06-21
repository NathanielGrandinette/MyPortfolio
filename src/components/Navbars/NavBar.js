import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { BsSun, BsMoon } from 'react-icons/bs'
import './NavBar.css'

const NavBar = ({ tone, setTone }) => {
    const [showLinks, setShowLinks] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return (
        <nav className="nav" style={{ height: showLinks ? '100%' : '75px' }}>
            {width < 990 ?
                <div className='navbar2' style={{ height: showLinks ? '100%' : '' }}>
                    <div className='nav-main'>
                        <div className='toneToggle'>
                            <div
                                className='tone'
                                style={{ backgroundColor: tone === 'light' ? '#f5f5f5' : '#102D44' }}
                                onClick={() => {
                                    setTone(tone === 'light' ? 'dark' : 'light')
                                }}>
                                {tone === 'light' ? <BsMoon /> : <BsSun />}
                            </div>
                        </div>
                        <div >
                            <Hamburger color={tone === 'light' ? 'black' : 'white'} onToggle={() => setTimeout(() => setShowLinks(!showLinks))} />
                        </div>
                    </div>
                    {showLinks ?
                        <div className='links-mobile'>
                            <Link to='/' className='navLink2' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                Home
                            </Link>
                            <Link to='/projects' className='navLink2' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                Projects
                            </Link>
                            <Link to='/about' className='navLink2' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                About Me
                            </Link>
                            <Link to='/contact' className='navLink2' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                Contact Me
                            </Link>
                        </div>
                        : ''}
                </div> :
                <div className='navbar1'>
                    <Container className='links'>
                        <Link to='/' className='navLink' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                            Home
                        </Link>
                        <Link to='/projects' className='navLink' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                            Projects
                        </Link>
                        <Link to='/about' className='navLink' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                            About Me
                        </Link>
                        <Link to='/contact' className='navLink' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                            Contact Me
                        </Link>
                        <div className='toneToggle'>
                            <div
                                className='tone'
                                style={{ backgroundColor: tone === 'light' ? '#f5f5f5' : '#102D44' }}
                                onClick={() => {
                                    setTone(tone === 'light' ? 'dark' : 'light')
                                }}>
                                {tone === 'light' ? <BsMoon /> : <BsSun />}
                            </div>
                        </div>
                    </Container>
                </div>}

        </nav>
    )
}

export default NavBar