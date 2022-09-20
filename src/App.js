import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Register from './pages/Register/Register';
import AllBooks from './pages/Allbooks/AllBooks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-page' element={<UserPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/allbooks' element={<AllBooks />} />
      </Routes>
    </div>
    
  );
}


export default App;
