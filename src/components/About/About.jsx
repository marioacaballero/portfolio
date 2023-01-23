/* eslint-disable linebreak-style */
/* eslint react/prop-types: 0 */

import React from 'react';
import { GiFallingStar } from 'react-icons/gi';
import style from './About.module.css';
import profile from '../Data/ImageComponents/Galaxy/galaxy1.jpg';

function About({ refAbout }) {
  return (
    <main id="about" className={style.mainAbout}>
      <a href="/portfolio/pillars" className={style.btn}>
        <GiFallingStar className={style.ico} />
        Info
      </a>
      <h2 ref={refAbout}>-- About Me --</h2>
      <section>
        <img alt="profile" src={profile} />
        <p>
          I am a Full Stack Developer specialize in web design. I am a good
          solving problems, creative, proactive and I have a great autonomy, and
          I enjoy working in teams.
          <br />
          I lead the started of an E-commerce related to vegetarian food located
          on Rosario, Argentina.
          <br />
          In my free time I like to practice some sports and read books to keep
          my body and my mind healthy.
          <br />
          You can find in me a good criticism, automation on all things that I
          do and a great leadership.
        </p>
      </section>
    </main>
  );
}

export default About;
