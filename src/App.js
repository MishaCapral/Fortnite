
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import HeaderContainer from './components/cosmetics/headerLayout/headerLayout';
import TypeLayout from './components/cosmetics/typeLayout';
import HomePage from './components/home/homePage';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { paper: '#2f3136' },
    primary: { main: '#fce200' },
    //secondary: { light: '#fce200' }
    text: { primary: '#fce200' }
  },

});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">


        <Routes>
          <Route path='/' element={<HeaderContainer />}>
            <Route index element={<HomePage />} />
            <Route path='cosmetics/*' element={< TypeLayout />} />
          </Route>
        </Routes>

      </div>
    </ThemeProvider>
  );
}

export default App;
