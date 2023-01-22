import React from 'react';
import { GiFallingStar } from 'react-icons/gi';
import CarouselProjects from '../Carousel/Carousel';
import style from './Projects.module.css';
import items from './projectsData';

function Projects() {
  return (
    <div id="projects" className={style.mainProjects}>
      <a href="/portfolio/crab" className={style.btn}>
        <GiFallingStar className={style.ico} />
        Info
      </a>
      <h2>-- My Projects --</h2>
      <section>
        <div>
          <CarouselProjects items={items} />
        </div>
      </section>
    </div>
  );
}

export default Projects;
