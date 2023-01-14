/* eslint-disable linebreak-style */

import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
