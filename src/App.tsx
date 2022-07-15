import React from 'react';
import './App.css';
import { Header } from './components/parts/Header';
import { Menu } from './components/parts/Menu'
import { Footer } from './components/parts/Footer';
import { Posts } from './components/pages/posts/Posts';
import { PostsShow } from './components/pages/posts/PostsShow';
import { Form } from './components/pages/form/Form';
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
              <Route path="/posts/:id" element={<PostsShow />} />
              <Route path="/form" element={<Form />} />
            </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
