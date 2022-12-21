/* eslint-disable linebreak-style */
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Stack from './components/Stack/Stack';

function App() {
  console.log('hola');
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

export default App;
