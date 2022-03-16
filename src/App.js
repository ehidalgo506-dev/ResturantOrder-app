import React from 'react';
import Header from './components/Layout/Header/Header';
import NavBar from './components/Layout/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import meals from './__data__/meals';

function App() {
  return (
    <div className='App'>
      <NavBar quantity={2} />
      <Header />
      <Menu data={meals} />
    </div>
  );
}

export default App;
