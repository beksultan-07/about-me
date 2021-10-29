import './App.css';
import AboutMe from './blocks/aboutMe';
import Footer from './blocks/footer';
import Header from './blocks/header';
import Skills from './blocks/skills'
import Achievements from './blocks/achievements.jsx'
import Projects from './blocks/projects'
import Contacts from './blocks/contacts'

import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(state => state)
  
  const [styles, setStyles] = useState()

  useEffect(() => {
    if (state.light) {
      setStyles({
        background: '#EEDEAA',
        color: '#000',
        transition: '.4s'
      })
    }else{
      setStyles({
        background: '#191323',
        color: '#fff',
        transition: '.4s'
      })
    }
    
  }, [state.light])
  return (
    <div className="wrap" style={styles}>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Achievements/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
