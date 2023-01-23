/* eslint func-names:0 */

import React, { useState } from 'react';
import { FaGithubSquare, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import style from './NavBar.module.css';

function NavBar() {
  const [scrollY, setScrolly] = useState(0);

  window.onscroll = function () {
    const y = window.scrollY;
    setScrolly(y);
  };
  console.log(scrollY);

  return (
    <div className={style.mainNavBar}>
      <h2>Mario Caballero</h2>
      <section>
        <a
          href="/portfolio/#home"
          style={{
            color: `${scrollY < 450 ? 'rgb(0, 98, 255)' : ''}`,
            fontWeight: `${scrollY < 450 ? 'bold' : ''}`,
            scale: `${scrollY < 450 ? '1.2' : ''}`,
          }}
        >
          Start
        </a>
        <a
          href="/portfolio/#about"
          style={{
            color: `${
              scrollY > 450 && scrollY < 1000 ? 'rgb(0, 98, 255)' : ''
            }`,
            fontWeight: `${scrollY > 450 && scrollY < 1000 ? 'bold' : ''}`,
            scale: `${scrollY > 450 && scrollY < 1000 ? '1.2' : ''}`,
          }}
        >
          About
        </a>
        <a
          href="/portfolio/#skills"
          style={{
            color: `${
              scrollY > 1000 && scrollY < 1600 ? 'rgb(0, 98, 255)' : ''
            }`,
            fontWeight: `${scrollY > 1000 && scrollY < 1600 ? 'bold' : ''}`,
            scale: `${scrollY > 1000 && scrollY < 1600 ? '1.2' : ''}`,
          }}
        >
          Skills
        </a>
        <a
          href="/portfolio/#projects"
          style={{
            color: `${
              scrollY > 1600 && scrollY < 2200 ? 'rgb(0, 98, 255)' : ''
            }`,
            fontWeight: `${scrollY > 1600 && scrollY < 2200 ? 'bold' : ''}`,
            scale: `${scrollY > 1600 && scrollY < 2200 ? '1.2' : ''}`,
          }}
        >
          Projects
        </a>
        <a
          href="/portfolio/#contact"
          style={{
            color: `${scrollY > 2200 ? 'rgb(0, 98, 255)' : ''}`,
            fontWeight: `${scrollY > 2200 ? 'bold' : ''}`,
            scale: `${scrollY > 2200 ? '1.2' : ''}`,
          }}
        >
          Contact
        </a>
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
