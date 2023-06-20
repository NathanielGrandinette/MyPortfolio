import './App.css';
import NavBar from './components/Navbars/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import ContactForm from './pages/contact/contact'
import About from './pages/about/about'



function App() {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
