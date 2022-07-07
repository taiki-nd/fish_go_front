import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 text-center">
              <a className="fs-1 text-dark" href="#">FishGo</a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 link-secondary" href="#">FreePost</a>
            <a className="p-2 link-secondary" href="#">AreaData</a>
            <a className="p-2 link-secondary" href="#">Form</a>
            <a className="p-2 link-secondary" href="#">FreePost</a>
            <a className="p-2 link-secondary" href="#">AreaData</a>
            <a className="p-2 link-secondary" href="#">Form</a>
          </nav>
        </div>
      </div>

      <main className="container">

      </main>

      <footer className="blog-footer">
        <p>footer area</p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </>
  );
}

export default App;
