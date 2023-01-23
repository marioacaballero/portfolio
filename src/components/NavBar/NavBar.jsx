/* eslint react/prop-types: 0 */

import React from 'react';
import { FaGithubSquare, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import style from './NavBar.module.css';

function NavBar({
  startView,
  aboutView,
  skillsView,
  projectsView,
  contactView,
}) {
  return (
    <div className={style.mainNavBar}>
      <h2>Mario Caballero</h2>
      <section>
        <a
          href="/portfolio/#home"
          style={{
            color: `${startView ? 'rgb(0, 98, 255)' : ''}`,
            fontWeight: `${startView ? 'bold' : ''}`,
            scale: `${startView ? '1.2' : ''}`,
            borderBottom: `${
              startView ? '4px rgba(245, 245, 245, 0.85) solid' : ''
            }`,
          }}
        >
          Start
        </a>
        <a
          href="/portfolio/#about"
          style={{
            color: `${aboutView ? 'rgb(0, 98, 255)' : ''}`,
            fontWeight: `${aboutView ? 'bold' : ''}`,
            scale: `${aboutView ? '1.2' : ''}`,
            borderBottom: `${
              aboutView ? '4px rgba(245, 245, 245, 0.85) solid' : ''
            }`,
          }}
        >
          About
        </a>
        <a
          href="/portfolio/#skills"
          style={{
            color: `${skillsView ? 'rgb(0, 98, 255)' : ''}`,
            fontWeight: `${skillsView ? 'bold' : ''}`,
            scale: `${skillsView ? '1.2' : ''}`,
            borderBottom: `${
              skillsView ? '4px rgba(245, 245, 245, 0.85) solid' : ''
            }`,
          }}
        >
          Skills
        </a>
        <a
          href="/portfolio/#projects"
          style={{
            color: `${projectsView ? 'rgb(0, 98, 255)' : ''}`,
            fontWeight: `${projectsView ? 'bold' : ''}`,
            scale: `${projectsView ? '1.2' : ''}`,
            borderBottom: `${
              projectsView ? '4px rgba(245, 245, 245, 0.85) solid' : ''
            }`,
          }}
        >
          Projects
        </a>
        <a
          href="/portfolio/#contact"
          style={{
            color: `${contactView ? 'rgb(0, 98, 255)' : ''}`,
            fontWeight: `${contactView ? 'bold' : ''}`,
            scale: `${contactView ? '1.2' : ''}`,
            borderBottom: `${
              contactView ? '4px rgba(245, 245, 245, 0.85) solid' : ''
            }`,
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
