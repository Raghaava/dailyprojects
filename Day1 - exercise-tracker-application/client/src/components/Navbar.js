import React  from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">ExerciseTracker</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Exericises <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/create">Create Exericise Log</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/user">Create User</a>
      </li>
    </ul>
  </div>
</nav>
);
}

export default Navbar;