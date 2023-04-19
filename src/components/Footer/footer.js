import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id='footer'>
            <p>Made with React <img className='reactImage' src='logo512.png' alt=''/></p>
            <footer>
                <Link to='/' style={{ margin: '2px', textDecoration: 'none' }} className='footer-link text-muted'>Home</Link>
                <Link to='/resume' style={{ margin: '2px', textDecoration: 'none' }} className='footer-link text-muted'>Resume</Link>
                <Link to='/projects' style={{ margin: '2px', textDecoration: 'none' }} className='footer-link text-muted'>Projects</Link>
                <Link to='/about' style={{ margin: '2px', textDecoration: 'none' }} className='footer-link text-muted'>About</Link>
                <Link to='/contact' style={{ margin: '2px', textDecoration: 'none' }} className='footer-link text-muted'>Contact</Link>
            </footer>
        </div>
    )
}

export default Footer