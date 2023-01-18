/* eslint-disable linebreak-style */

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Crab from './components/ImagesComponents/Crab/Crab';
import Galaxy from './components/ImagesComponents/Galaxy/Galaxy';
import Helix from './components/ImagesComponents/Helix/Helix';
import Ngc6302 from './components/ImagesComponents/Ngc6302/Ngc6302';
import Pillars from './components/ImagesComponents/Pillars/Pillars';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/galaxy" element={<Galaxy />} />
        <Route path="/portfolio/helix" element={<Helix />} />
        <Route path="/portfolio/pillars" element={<Pillars />} />
        <Route path="/portfolio/ngc6302" element={<Ngc6302 />} />
        <Route path="/portfolio/crab" element={<Crab />} />
      </Routes>
    </div>
  );
}

export default App;
