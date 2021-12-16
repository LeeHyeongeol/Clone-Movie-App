import React from 'react';
// import Home from './routes/Home';
import './app.css';
import { HashRouter, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './component/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/movie-detail' component={Detail} />
        <Navigation />
      </HashRouter>
    </div >
  )
}

export default App
