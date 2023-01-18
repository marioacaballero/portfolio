import React from 'react';
import { FaGithubSquare, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import style from './NavBar.module.css';

function NavBar() {
  return (
    <div className={style.mainNavBar}>
      <h2>Mario Caballero</h2>
      <section>
        <a href="/portfolio/#home">Start</a>
        <a href="/portfolio/#about">About</a>
        <a href="/portfolio/#skills">Skills</a>
        <a href="/portfolio/#projects">Projects</a>
        <a href="/portfolio/#contact">Contact</a>
      </section>
      <div>
        <a
          href="https://github.com/marioacaballero"
          target="_blank"
          rel="noreferrer"
        >
          <FaFileDownload className={style.icon2} />
        </a>
        <a
          href="https://github.com/marioacaballero"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className={style.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/mario-a-caballero/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={style.icon} />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
