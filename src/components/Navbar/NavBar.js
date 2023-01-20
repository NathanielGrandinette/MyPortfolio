import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        Home
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavDropdown className='profileImage' title={<img src='profile-photo.jpg' alt=''/>} id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/resume' className='navLink'>
                                    Resume
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to='/projects' className='navLink'>
                                    Projects
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/about' className='navLink'>
                                    About Me
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to='/contact' className='navLink'>
                                    Contact Me
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar