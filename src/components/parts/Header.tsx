import React from 'react'

export const Header = () => {
  return(
    <>
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 text-center">
            <a className="fs-1 text-dark" href="/">FishGo</a>
          </div>
        </div>
      </header>
    </>
  );
}