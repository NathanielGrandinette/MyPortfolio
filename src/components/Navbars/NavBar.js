import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { BsSun, BsMoon } from 'react-icons/bs'
import './NavBar.css'

const NavBar = ({ tone, setTone }) => {
    const [showLinks, setShowLinks] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [locations, setLocations] = useState(window.location.pathname)
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    const location = useLocation()

    const bottomBorder = "1px solid #3498db"

    useEffect(() => {
        setLocations(location.pathname)
    }, [location])
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
                        <div>
                            <Hamburger 
                                toggled={showLinks}
                                toggle={() => setTimeout(() => setShowLinks(!showLinks))}
                                color={tone === 'light' ? 'black' : 'white'} />
                        </div>
                    </div>
                    {showLinks ?
                        <div className='links-mobile'>
                            <Link to='/' onClick={() => setShowLinks(false)} className='navLink2' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                Home
                            </Link>
                            <Link to='/projects' onClick={() => setShowLinks(false)} className='navLink2' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                Projects
                            </Link>
                            <Link to='/about' onClick={() => setShowLinks(false)} className='navLink2' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                About Me
                            </Link>
                            <Link to='/contact' onClick={() => setShowLinks(false)} className='navLink2' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                Contact Me
                            </Link>
                        </div>
                        : ''}
                </div> :
                <div className='navbar1'>
                    <div className='links'>
                        <Link to='/' className='nav-name' >
                            <div className='nav-nathan' style={{ color: tone === 'light' ? 'black' : 'white' }}>
                                Nathaniel Grandinette
                            </div>
                            <div className='nav-title'>
                                Software Developer
                            </div>
                        </Link>
                        <Link to='/projects' className='navLink' style={{ borderBottom: locations === "/projects" ? bottomBorder : "", color: tone === 'light' ? 'black' : 'white'}}>
                            Projects
                        </Link>
                        <Link to='/about' className='navLink' style={{ borderBottom: locations === "/about" ? bottomBorder : "", color: tone === 'light' ? 'black' : 'white' }}>
                            About Me
                        </Link>
                        <Link to='/contact' className='navLink' style={{ borderBottom: locations === "/contact" ? bottomBorder : "", color: tone === 'light' ? 'black' : 'white' }}>
                            Contact Me
                        </Link>
                    </div>
                    <div className='toneToggle' data-testid="tone-toggle">
                            <div
                                className='tone'
                                style={{ backgroundColor: tone === 'light' ? '#f5f5f5' : '#102D44' }}
                                onClick={() => {
                                    setTone(tone === 'light' ? 'dark' : 'light')
                                }}>
                                {tone === 'light' ? <BsMoon /> : <BsSun />}
                            </div>
                        </div>
                </div>}

        </nav>
    )
}

export default NavBar