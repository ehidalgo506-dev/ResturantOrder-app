import React from 'react';
import Header from './components/Layout/Header/Header';
import NavBar from './components/Layout/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar quantity={2} />
      <Header />
    </div>
  );
}

export default App;
