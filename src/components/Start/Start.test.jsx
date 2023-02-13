import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Start from './Start';

describe('Start', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <Router>
        <Start />
      </Router>
    );
  });

  it('should render my name correctly', () => {
    render(
      <Router>
        <Start />
      </Router>
    );

    screen.findByText('Mario Alberto Caballero');
  });

  it('should contain a "info" Link', () => {
    render(
      <Router>
        <Start />
      </Router>
    );

    screen.findByText('Info');
  });
});
