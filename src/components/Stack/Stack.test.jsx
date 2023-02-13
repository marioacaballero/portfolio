import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Stack from './Stack';

describe('Stack', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <Router>
        <Stack />
      </Router>
    );
  });

  it('should render tittle correctly', () => {
    render(
      <Router>
        <Stack />
      </Router>
    );

    screen.findByText('My Skills');
  });

  it('should contain a "info" Link', () => {
    render(
      <Router>
        <Stack />
      </Router>
    );

    screen.findByText('Info');
  });

  it('should contain two h3 for each subtittle', () => {
    render(
      <Router>
        <Stack />
      </Router>
    );

    const subtittles = screen.getAllByRole('heading', { level: 3 });

    expect(subtittles.length).toBe(2);
  });
});
