/* eslint react/prop-types: 0 */

import React from 'react';
import { GiFallingStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import style from './Start.module.css';

function Start({ refStart }) {
  return (
    <div id="home" className={style.mainStart}>
      <header ref={refStart}>
        <p>Hello World! Welcome, I am</p>
      </header>
      <h1>Mario Alberto Caballero</h1>
      <h3>Full Stack Web Developer and Engineer</h3>
      <Link to="/galaxy" className={style.btn}>
        <GiFallingStar className={style.ico} />
        Info
      </Link>
    </div>
  );
}

export default Start;
