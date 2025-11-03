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
import { useAuth } from './context/AuthProvider'; // added
import ResetPassword from './pages/ResetPassword'; //changed

// ...existing code...
export default function App() {
  const values = "container mx-auto px-4 sm:px-6 lg:px-8 py-8";

  // Simple wrapper to require auth for a route
  const RequireAuth = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return null; // or a spinner
    return user ? children : <Navigate to="/auth" replace />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<div className={values}><Chatbot /></div>} />
          <Route path="/therapists" element={<div className={values}><Therapists /></div>} />
          <Route path="/depression-test" element={<div className={values}><DepressionTest /></div>} />
          <Route path="/your-zone" element={<RequireAuth><div className={values}><YourZone /></div></RequireAuth>} />
          <Route path="/connect" element={<div className={values}><Connect /></div>} />
          <Route path="/about" element={<div className={values}><About /></div>} />
          <Route path="/auth" element={<div className={values}><AuthPage /></div>} />
          <Route path="/reset-password" element={<ResetPassword />} /> 
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}