import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should render', () => {
    render(
      <Router initialEntries={['/portfolio']}>
        <App />
      </Router>
    );
  });
});
