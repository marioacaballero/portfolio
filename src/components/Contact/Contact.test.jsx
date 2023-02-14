import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Contact from './Contact';

describe('Contact', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );
  });

  it('should render tittle correctly', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );

    screen.findByText('Contact Me');
  });

  it('should contain a "info" Link', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );

    screen.findByText('Info');
  });

  it('should has inputs for name, subject, email and message', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );

    screen.getByPlaceholderText('Name');
    screen.getByPlaceholderText('Subject');
    screen.getByPlaceholderText('Email Address');
    screen.getByPlaceholderText('Your message');
  });

  it('should has a button to send the message with the text "Send Message"', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );

    screen.getByRole('button', { name: 'Send Message' });
  });
});
