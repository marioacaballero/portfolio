import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Stack from '../Stack/Stack';

function Home() {
  return (
    <div>
      <header>
        <p>Hello World!</p>
      </header>
      <About />
      <Stack />
      <Education />
      <Projects />
    </div>
  );
}

export default Home;
