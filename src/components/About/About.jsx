/* eslint-disable linebreak-style */
import React from 'react';
import style from './About.module.css';
import profile from '../Data/galaxy1.jpg';

function About() {
  return (
    <main className={style.mainAbout}>
      {/* <h3>Get To Know</h3> */}
      <h2>-- About Me --</h2>
      {/* <a href="/">Download CV</a> */}
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
