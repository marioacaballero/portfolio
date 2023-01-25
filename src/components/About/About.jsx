/* eslint-disable linebreak-style */
/* eslint react/prop-types: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { GiFallingStar } from 'react-icons/gi';
import style from './About.module.css';
import profile from '../Data/PersonalData/me.jpg';

function About({ refAbout }) {
  const goUp = () => {
    window.scroll(0, 0);
  };

  return (
    <main id="about" className={style.mainAbout}>
      <Link to="/pillars" className={style.btn} onClick={() => goUp()}>
        <GiFallingStar className={style.ico} />
        Info
      </Link>
      <h2>-- About Me --</h2>
      <section>
        <img alt="profile" src={profile} />
        <section>
          <p ref={refAbout}>
            I am a Full Stack Developer specialize in web design. I am a good
            solving problems, creative, proactive and I have a great autonomy,
            and I enjoy working in teams.
          </p>
          <p>
            I lead the started of an E-commerce related to vegetarian food
            located on Rosario, Argentina.
          </p>
          <p>
            In my free time I like to practice some sports and read books to
            keep my body and my mind healthy.
          </p>
          <p>
            You can find in me a good criticism, automation on all things that I
            do and a great leadership.
          </p>
        </section>
      </section>
    </main>
  );
}

export default About;
