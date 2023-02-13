import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
  });

  it('should render my name correctly', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    screen.findByText('Mario Caballero');
  });

  it('should contain 8 links', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(4);
  });
});
