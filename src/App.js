
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import HeaderContainer from './components/cosmetics/headerLayout/headerLayout';
import TypeLayout from './components/cosmetics/typeLayout';
import HomePage from './components/home/homePage';


const App = () => {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<HeaderContainer />}>
          <Route index element={<HomePage />} />
          <Route path='cosmetics' element={< TypeLayout />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
