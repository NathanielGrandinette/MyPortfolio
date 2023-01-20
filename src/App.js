import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Routes, Route, Link } from 'react-router-dom'
import Resume from './pages/resume/resume'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import ContactForm from './pages/contact/contact'
import About from './pages/about/about'
import Footer from './components/Footer/footer'



function App() {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
