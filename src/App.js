import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-page' element={<UserPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    
  );
}


export default App;
