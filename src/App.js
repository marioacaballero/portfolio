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
        <Route exact path="/portfolio/" element={<Home />} />
        <Route path="/galaxy" element={<Galaxy />} />
        <Route path="/helix" element={<Helix />} />
        <Route path="/pillars" element={<Pillars />} />
        <Route path="/ngc6302" element={<Ngc6302 />} />
        <Route path="/crab" element={<Crab />} />
      </Routes>
    </div>
  );
}

export default App;
