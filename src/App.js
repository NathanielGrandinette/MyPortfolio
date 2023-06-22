import './App.css';
import NavBar from './components/Navbars/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import { useState } from 'react';



function App() {
  const [tone, setTone] = useState('dark')
  
  return (
    <div className="App"
      style={{
        backgroundColor: tone === 'light' ? 'white' : '#091927',
        color: tone === 'light' ? 'black' : 'white'
      }}>
      <NavBar tone={tone} setTone={setTone} />

      <Routes>
        <Route path='/' element={<Home tone={tone} />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About tone={tone} />} />
        <Route path='/contact' element={<Contact tone={tone} />} />
      </Routes>
    </div>
  );
}

export default App;
