import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
// import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Stack from '../Stack/Stack';
import Start from '../Start/Start';
import style from './Home.module.css';

function Home() {
  return (
    <div className={style.mainHome}>
      <Start />
      <About />
      <Stack />
      {/* <Education /> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
