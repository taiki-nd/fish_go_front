import { Link } from "react-router-dom";

export const Menu = () => {
  return(
    <>
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link to="/" className="p-2 link-secondary">FreePost</Link>
          <Link to="/form" className="p-2 link-secondary">Form</Link>
        </nav>
      </div>
    </>
  );
}