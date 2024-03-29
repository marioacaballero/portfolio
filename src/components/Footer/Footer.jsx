import React from 'react';
import { FaGithubSquare, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import CV from '../Data/PersonalData/CV - Mario Caballero - Full Stack Web Developer.pdf';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.mainFooter}>
      <h3>
        Design by
        <a href="/portfolio/#home">Mario Caballero</a>
      </h3>
      <section>
        <a href={CV} download="CV - Mario Caballero - Full Stack Web Developer">
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
      </section>
    </div>
  );
}

export default Footer;
