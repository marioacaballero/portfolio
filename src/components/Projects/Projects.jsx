/* eslint react/prop-types: 0 */

import React from 'react';
import { GiFallingStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import CarouselProjects from '../Carousel/Carousel';
import style from './Projects.module.css';
import items from './projectsData';

function Projects({ refProjects }) {
  const goUp = () => {
    window.scroll(0, 0);
  };

  return (
    <div id="projects" className={style.mainProjects}>
      <Link to="/crab" className={style.btn} onClick={() => goUp()}>
        <GiFallingStar className={style.ico} />
        Info
      </Link>
      <h2 ref={refProjects}>-- My Projects --</h2>
      <section>
        <div>
          <CarouselProjects items={items} />
        </div>
      </section>
    </div>
  );
}

export default Projects;
