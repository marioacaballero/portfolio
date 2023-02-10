/* eslint-disable linebreak-style */
/* eslint react/prop-types: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { GiFallingStar } from 'react-icons/gi';
import style from './About.module.css';
import profile from '../Data/PersonalData/me.jpg';

function About({ refAbout }) {
  return (
    <main id="about" className={style.mainAbout}>
      <Link to="/pillars" className={style.btn}>
        <GiFallingStar className={style.ico} />
        Info
      </Link>
      <h2>-- About Me --</h2>
      <section>
        <img alt="profile" src={profile} />
        <section>
          <p ref={refAbout}>
            I am a Full Stack Developer specialize in web designed. I am a good
            solving problems, creative, proactive and I have a great autonomy;
            and I enjoy working in teams.
          </p>
          <p>
            I work with PERN stack, and also include Redux, Ant Design,
            Sequelize, Typescript and some others; I am opening to work with new
            technologies too. Actually, I am practice with NestJs to develop an
            admin app for E-Commerce.
          </p>
          <p>
            I am in charge of an E-commerce related to healthy vegetarian food
            located in Rosario, Argentina.
          </p>
          <p>
            In my free time I like to practice some sports and read books to
            keep my body and my mind in a healthy way.
          </p>
          <p>
            As regards my social skills, I have a possitive critical attitude,
            openminded, an automated way of doing different tasks and a great
            skill for leadership.
          </p>
        </section>
      </section>
    </main>
  );
}

export default About;
