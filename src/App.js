import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/hats' element={<HatsPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;