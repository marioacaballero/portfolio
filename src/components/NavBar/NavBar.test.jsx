import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
  });

  it('should render my name correctly', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    screen.findByText('Mario Caballero');
  });

  it('should contain 8 links', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(8);
  });

  it('should has the correct links name', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    screen.findByText('Start About Skills Projects Contact');
  });
});
