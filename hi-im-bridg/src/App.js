 
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
    <main>
      <Router>
      <Home />
      </Router>
    </main>
  </div>
  );
}

export default App;
