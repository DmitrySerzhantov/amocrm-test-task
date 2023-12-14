import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='App__container'>
        <Header />
        <Promo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
