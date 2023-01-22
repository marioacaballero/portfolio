import React from 'react';
import { TiArrowUpOutline } from 'react-icons/ti';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Stack from '../Stack/Stack';
import Start from '../Start/Start';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import style from './Home.module.css';

function Home() {
  return (
    <div className={style.mainHome}>
      <button
        type="button"
        onClick={() => window.scrollTo(0, 0)}
        className={style.toTop}
      >
        <TiArrowUpOutline />
      </button>
      <NavBar />
      <Start />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
