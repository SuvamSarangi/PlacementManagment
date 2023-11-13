import React from 'react'
import { Link } from 'react-router-dom';
export default function StudentNav() {
  return (
    <div>
         {/* <!-- Navigation Bar --> */}
         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
         {/* <div className='logo'style={{width:"8px", height:"10px"}}>
                        <img src="https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp" alt=""/>
                        </div> */}
                    <div class="container">

                        {/* <a class="navbar-brand" href="#">Student Dashboard</a> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/" >Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/jobs">Company</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/training">Trainings</Link>
                                </li>
                            </ul>
                            {/* Logout Modal */}
                            <button class="btn btn-danger btn-block ms-auto" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</button>
                            <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="logoutModalLabel">Logout</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to logout?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-danger">Logout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </nav>
    </div>
  )
}
