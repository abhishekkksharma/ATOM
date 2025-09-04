import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import Therapists from './pages/Therapists';
import DepressionTest from './pages/DepressionTest';
import YourZone from './pages/YourZone';
import Connect from './pages/Connect';
import About from './pages/About';
import AuthPage from './pages/AuthPage';
// import xy from './pages/xy';

export default function App() {
  const values = "container mx-auto px-4 sm:px-6 lg:px-8 py-8";
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<div className={values}><Chatbot /></div>} />
          <Route path="/therapists" element={<div className={values}><Therapists /></div>} />
          <Route path="/depression-test" element={<div className={values}><DepressionTest /></div>} />
          <Route path="/your-zone" element={<div className={values}><YourZone /></div>} />
          <Route path="/connect" element={<div className={values}><Connect /></div>} />
          <Route path="/about" element={<div className={values}><About /></div>} />
          <Route path="/auth" element={<div className={values}><AuthPage /></div>} />
          {/* Redirect any unknown routes to home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}