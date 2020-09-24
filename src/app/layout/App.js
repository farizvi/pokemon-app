import React from 'react';
import './App.scss';
import { Navbar, Pokemons } from '../../components';

function App() {
  return (
    <div>
      <Navbar />
      <div id='wrapper-main'>
        <Pokemons />
      </div>
    </div>
  );
}

export default App;
