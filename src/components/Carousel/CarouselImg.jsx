/* eslint react/prop-types: 0 */

import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { BiWorld } from 'react-icons/bi';
import style from './CarouselImg.module.css';

function CarouselImg({ item }) {
  return (
    <div className={style.mainCard}>
      <img src={item.src} alt={item.altText} />
      <div>
        <h3>{item.name}</h3>
        <div>
          <p>{item.description}</p>
          <a href={item.repo} target="_blank" rel="noreferrer">
            <VscGithub className={style.icon} />
            <h3>Repository</h3>
          </a>
          {item.demo && (
            <a href={item.demo} target="_blank" rel="noreferrer">
              <BiWorld className={style.icon} />
              <h3>Website</h3>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarouselImg;
