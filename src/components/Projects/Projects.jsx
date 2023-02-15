/* eslint react/prop-types: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { GiFallingStar } from 'react-icons/gi';
import CarouselProjects from '../Carousel/Carousel';
import style from './Projects.module.css';
import items from './projectsData';

function Projects({ refProjects }) {
  return (
    <div id="projects" className={style.mainProjects}>
      <Link to="/crab" className={style.btn}>
        <GiFallingStar className={style.ico} />
        Info
      </Link>
      <h2 ref={refProjects}>🪐 My Projects 🪐</h2>
      <section>
        <div>
          <CarouselProjects items={items} />
        </div>
      </section>
    </div>
  );
}

export default Projects;
