import React from 'react';
import Routes from "./routes";

import './styles.css';
//import api from './services/api';
import Header from './components/Header';

const App = () => (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
);

export default App;
