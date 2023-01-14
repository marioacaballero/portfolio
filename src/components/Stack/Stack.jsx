import React from 'react';
import style from './Stack.module.css';
import { allStack, allSoft } from './techData';
import TechImgs from './TechImgs/TechImgs';

function Stack() {
  return (
    <div id="skills" className={style.mainStack}>
      <h2>-- My Skills --</h2>
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
