import React from 'react';
import Dashboard from './Dashboard'; // Ensure the path points to Dashboard.js
import COPQ from './COPQ'; // Ensure the path points to COPQ.js
import './index.css'; // Import global styles if necessary

function App() {
  return (
    <div className="App">
      <header>
        <h1>Six Sigma App</h1>
      </header>
      <main>
        <Dashboard />
        <COPQ />
      </main>
      <footer>
        <p>&copy; 2024 Six Sigma App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
