import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Contact from './components/Contact'; 
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import SearchPage from './components/SearchPage';
import Property from './components/Property';
import './App.css';
import AboutUs from './components/AboutUs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <SearchBar />
                  </>
                }
              />
              <Route path="/kontakti" element={<Contact />} /> 
              <Route path="/about" element={<AboutUs />} /> 
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/property/:id" element={<Property />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
