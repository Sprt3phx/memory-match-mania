import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Game from './pages/Game'
import Settings from './pages/Settings'
import Results from './pages/Results'
import NotFound from './components/NotFound'
import { useTheme } from './context/ThemeContext.jsx';

function App() {
  const { theme } = useTheme();


  return (
    <>
       <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "light"
          ? "text-gray-800"
          : "text-white"
      }`}
    >
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/results' element={<Results />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      </div>
    </>
  );
}

export default App
