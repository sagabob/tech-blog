import React, { useState, useEffect } from 'react'
import './App.scss';
import AppRoute from './AppRoute';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import { MobileSize, TabletSize, IsMobile, IsTablet, IsDesktop } from './util/constant';
import { AppContextProvider } from './AppContext';


const App = () => {

  const [screenSizeMode, setScreenSizeMode] = useState(IsDesktop);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleScrollEvent = () => {

    const scrollTop = window.scrollY;

    setScrollValue(scrollTop)
  };

  const handleWindowSizeChange = () => {
    if (window.innerWidth <= MobileSize)
      setScreenSizeMode(IsMobile);
    else if (window.innerWidth > MobileSize && window.innerWidth < TabletSize)
      setScreenSizeMode(IsTablet);
    else
      setScreenSizeMode(IsDesktop);
  };

  return (
    <AppContextProvider value={{ screenSizeMode, scrollValue }}>
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AppContextProvider>
  );
}

export default App;
