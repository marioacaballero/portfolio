import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import About from './About';

describe('About', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <Router>
        <About />
      </Router>
    );
  });

  it('should render tittle correctly', () => {
    render(
      <Router>
        <About />
      </Router>
    );

    screen.findByText('About Me');
  });

  it('should contain a "info" Link', () => {
    render(
      <Router>
        <About />
      </Router>
    );

    screen.findByText('Info');
  });

  it('should render a img', () => {
    render(
      <Router>
        <About />
      </Router>
    );

    screen.getByRole('img');
  });

  it('should render the text "I am a Full Stack Developer"', () => {
    render(
      <Router>
        <About />
      </Router>
    );

    screen.findByText('I am a Full Stack Developer');
  });
});
