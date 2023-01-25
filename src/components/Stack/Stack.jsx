/* eslint react/prop-types: 0 */

import React from 'react';
import { GiFallingStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import style from './Stack.module.css';
import { allStack, allSoft } from './techData';
import TechImgs from './TechImgs/TechImgs';

function Stack({ refSkills }) {
  const goUp = () => {
    window.scroll(0, 0);
  };

  return (
    <div id="skills" className={style.mainStack}>
      <Link to="/helix" className={style.btn} onClick={() => goUp()}>
        <GiFallingStar className={style.ico} />
        Info
      </Link>
      <h2 ref={refSkills}>-- My Skills --</h2>
      <section>
        <div>
          <h3>Tech Skills</h3>
          <div className={style.techSkills}>
            {allStack.map((elem) => (
              <TechImgs key={elem.name} img={elem.img} name={elem.name} />
            ))}
          </div>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <div className={style.softSkills}>
            {allSoft.map((elem) => (
              <TechImgs key={elem.name} img={elem.img} name={elem.name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stack;
