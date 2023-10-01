import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/header';

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/signin' element={<SignIn />} />
    <Route path='/signout' element={<SignOut />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/about' element={<About />} />
  </Routes>
  </BrowserRouter>;
}