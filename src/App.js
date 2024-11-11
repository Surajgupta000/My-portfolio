import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Index';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect running');
    const timer = setTimeout(() => {
      console.log('Timer finished');
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
      {showLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add fallback route to handle unmatched paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
