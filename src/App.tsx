import React from 'react';
import './App.css';
import { Header } from './components/parts/Header';
import { Menu } from './components/parts/Menu'
import { Footer } from './components/parts/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
      </div>

      <main className="container">

      </main>

      <Footer />
    </>
  );
}

export default App;
