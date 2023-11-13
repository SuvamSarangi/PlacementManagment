import { Link } from 'react-router-dom';
import '../Student.css'
import StudentNav from '../Layout/StudentNav';


export default function Students() {
    return (
        <>
            <div className='main-container'>

                <StudentNav/>
                <img src="https://cutm.ac.in/wp-content/uploads/2020/01/Graduate-banner.jpg" class="img-fluid" alt="..."></img>

                <div className='navbar navbar-expand-lg navbar-light bg-secondary' style={{ width: "100%", height: "4rem" }}>
                    <div className='row'>
                        <h2 className='text-white'>Student Dashboard</h2>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <div className="container mt-4">
                    <div className="row ">
                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com/images/i/undraw_web_developer_p3e5.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className="card-text  text-white " to="/jobs">View Jobs</Link>
                            </div>
                        </div>

                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com//images/i/undraw_dev_focus_b9xo.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className='card-text text-white' to="/profile">My Profile</Link>
                            </div>
                        </div>

                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="https://cutm-bbsr.codetantra.com/images/i/undraw_exams_g4ow.svg" className="card-img-top" alt="..." />
                            <div className="card-body bg-primary">
                                <Link className='card-text text-white' to="/training">View Training</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='base-footer ' style={{ margin: "20.5rem auto" }}>
                    <p>© 2022 Centurion University | Disclaimer | Privacy Policy | Terms of Use | Blog</p>
                </div>
            </div>
        </>
    );
}
