import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-links">
        <Link to="/clients" className="nav-link">
          Clients
        </Link>
        <Link to="/sessions" className="nav-link">
          sessions
        </Link>
        <Link to="/timetable" className="nav-link">
          timetable
        </Link>
        <Link to="/archive" className="nav-link">
          archive
        </Link>
        <Link to="/settings" className="nav-link">
          settings
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
