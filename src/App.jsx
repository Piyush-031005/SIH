import React, { useState } from 'react';
import RichDashboard from './components/RichDashboard';
import CoreFeatures from './components/CoreFeatures';
import PrototypeView from './components/PrototypeView';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: 'var(--bg-dark)' }}>
      {/* Floating Navigation Menu */}
      <div className="app-navigation">
        <button 
          className={`nav-btn ${activeView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveView('dashboard')}
        >
          Architecture Dashboard
        </button>
        <button 
          className={`nav-btn ${activeView === 'features' ? 'active' : ''}`}
          onClick={() => setActiveView('features')}
        >
          System Capabilities
        </button>
        <button 
          className={`nav-btn ${activeView === 'prototype' ? 'active' : ''}`}
          onClick={() => setActiveView('prototype')}
        >
          UI Prototype
        </button>
      </div>

      {activeView === 'dashboard' && <RichDashboard />}
      {activeView === 'features' && <CoreFeatures />}
      {activeView === 'prototype' && <PrototypeView />}
    </div>
  );
}

export default App;
