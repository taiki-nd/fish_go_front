import React from 'react';
import './App.css';
import { Header } from './components/parts/Header';
import { Menu } from './components/parts/Menu'
import { Footer } from './components/parts/Footer';
import { Posts } from './components/pages/Posts';
import { Form } from './components/pages/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Menu />
        </div>

        <main className="container">
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/form" element={<Form />} />
            </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
