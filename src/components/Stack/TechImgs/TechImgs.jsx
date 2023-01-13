import React from 'react';
import style from './TechImgs.module.css';
/* eslint react/prop-types: 0 */

function TechImgs({ img, name }) {
  return (
    <div className={style.techImgs}>
      <img alt="a" src={img} />
      <p>{name}</p>
    </div>
  );
}

export default TechImgs;
