/* eslint react/prop-types: 0 */

import React from 'react';
import { GiFallingStar } from 'react-icons/gi';
import style from './Start.module.css';

function Start({ refStart }) {
  return (
    <div id="home" className={style.mainStart}>
      <header ref={refStart}>
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
