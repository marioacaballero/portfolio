import React from 'react';
import { GiFallingStar } from 'react-icons/gi';
import style from './Start.module.css';

function Start() {
  return (
    <div id="home" className={style.mainStart}>
      <header>
        <p>Hello World! Welcome, I am</p>
      </header>
      <h1>Mario Alberto Caballero</h1>
      <h3>Full Stack Web Developer and Engineer</h3>
      <a href="/portfolio/galaxy" className={style.btn}>
        <GiFallingStar className={style.ico} />
        Info
      </a>
    </div>
  );
}

export default Start;
