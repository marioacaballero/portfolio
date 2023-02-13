import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Projects from './Projects';

describe('Projects', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <Router>
        <Projects />
      </Router>
    );
  });

  it('should render tittle correctly', () => {
    render(
      <Router>
        <Projects />
      </Router>
    );

    screen.findByText('My Projects');
  });

  it('should contain a "info" Link', () => {
    render(
      <Router>
        <Projects />
      </Router>
    );

    screen.findByText('Info');
  });
});
