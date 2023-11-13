import React from 'react'
import { Link } from 'react-router-dom';
import StudentNav from '../Layout/StudentNav';
export default function Admin() {
  return (
     <>
            <div className='main-container'>

                <StudentNav/>
                <img src="https://cutm.ac.in/wp-content/uploads/banner-6.jpg" class="img-fluid" alt="..."></img>

                <div className='navbar navbar-expand-lg navbar-light bg-secondary' style={{ width: "100%", height: "4rem" }}>
                    <div className='row'>
                        <h2 className='text-white'>Admin Dashboard</h2>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <div className="container mt-4">
                    <div className="row ">
                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com/images/i/undraw_web_developer_p3e5.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className="card-text  text-white " to="/jobs">Add Jobs</Link>
                            </div>
                        </div>
                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com/images/i/undraw_exams_g4ow.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className='card-text text-white' to="">Add Students</Link>
                            </div>
                        </div>
                        
                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com/images/i/undraw_exams_g4ow.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className='card-text text-white' to="/training">Add Training</Link>
                            </div>
                        </div>
                        
                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com//images/i/undraw_dev_focus_b9xo.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className='card-text text-white' to="/profile">My Account</Link>
                            </div>
                        </div>
                        <div className="card m-auto mt-5" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com//images/i/undraw_dev_focus_b9xo.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className='card-text text-white' to="/profile">View Student</Link>
                            </div>
                        </div>
                        <div className="card m-auto mt-5" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com//images/i/undraw_dev_focus_b9xo.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className='card-text text-white' to="/profile">View Company</Link>
                            </div>
                        </div>
                        <div className="card m-auto mt-5" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com//images/i/undraw_dev_focus_b9xo.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className='card-text text-white' to="/profile">View Training</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='base-footer ' style={{ margin: "20.5rem auto" }}>
                    <p>© 2023 Centurion University | Disclaimer | Privacy Policy | Terms of Use | Blog</p>
                </div>
            </div>
        </>
  )
}
