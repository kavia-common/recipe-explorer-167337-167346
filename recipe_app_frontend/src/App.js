import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App" style={{ minHeight: '100vh', background: theme === 'light' ? '#f9fafb' : '#1a1a1a' }}>
      <header className="App-header" style={{ background: 'transparent', boxShadow: 'none', minHeight: 'auto', padding: '20px 0' }}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <SignIn />
      </main>
    </div>
  );
}

export default App;
