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
import AuthPage from './pages/AuthPage'; // Add this import

// import xy from './pages/xy';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/therapists" element={<Therapists />} />
          <Route path="/depression-test" element={<DepressionTest />} />
          <Route path="/your-zone" element={<YourZone />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<AuthPage />} />
          {/* Redirect any unknown routes to home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
