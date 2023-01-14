import React from 'react';
import CarouselProjects from '../Carousel/Carousel';
import style from './Projects.module.css';
import items from './projectsData';

function Projects() {
  return (
    <div className={style.mainProjects}>
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
