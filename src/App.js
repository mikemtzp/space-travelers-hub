import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getRockets from './redux/apiRockets';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import getMissions from './redux/apiMissions';

import './assets/scss/App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
