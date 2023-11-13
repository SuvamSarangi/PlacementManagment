import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (

    <section className='navbar-bg shadow p-3 mb-2 bg- rounded'>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container">
          <Link className="navbar-brand" to="#"><img src="https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp" alt="centurion university" width="40" height="40" />

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/campuse">Campuses</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Placements
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <h5>Training</h5>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <h5>Overview</h5>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else</a></li>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <h5>Contacts</h5>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Student</a></li>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Log In
              </button>
              <ul class="dropdown-menu "style={{width:"5px"}}>
                <li><Link class="dropdown-item" to="/admin">Admin</Link></li>
                <li><Link class="dropdown-item" to="/students">Student</Link></li>
              </ul>
            </div>
      </nav>
      
    </section>


  )
}
