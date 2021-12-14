import React from 'react';
// import Home from './routes/Home';
import './app.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <div>
      <Router>
        <Route exact={true} path='/about' component={About} />
        <Route exact={true} path='/home' component={Home} />
      </Router>
    </div >
  )
}

export default App
