import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Register from './pages/Register/Register';
import AllBooks from './pages/Allbooks/AllBooks';
import UserPageBooks from './pages/UserPageBooks/UserPageBooks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-page' element={<UserPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/allbooks' element={<AllBooks />} />
        <Route path="/user-page/:_id" element={<UserPageBooks />} />
      </Routes>
    </div>
    
  );
}


export default App;
