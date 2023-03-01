import React from 'react';
import { useInView } from 'react-intersection-observer';
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
  const { ref: start, inView: startView } = useInView();
  const { ref: about, inView: aboutView } = useInView();
  const { ref: skills, inView: skillsView } = useInView();
  const { ref: projects, inView: projectsView } = useInView();
  const { ref: contact, inView: contactView } = useInView();
  return (
    <div className={style.mainHome}>
      <button
        id="toTop"
        type="button"
        onClick={() => window.scrollTo(0, 0)}
        className={style.toTop}
      >
        <TiArrowUpOutline />
      </button>
      <NavBar
        startView={startView}
        aboutView={aboutView}
        skillsView={skillsView}
        projectsView={projectsView}
        contactView={contactView}
      />
      <Start refStart={start} />
      <About refAbout={about} />
      <Stack refSkills={skills} />
      <Projects refProjects={projects} />
      <Contact refContact={contact} />
      <Footer />
    </div>
  );
}

export default Home;
