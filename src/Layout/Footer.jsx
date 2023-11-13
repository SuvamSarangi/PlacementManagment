import React from 'react'
import '../Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='container' >
        <div className='row'>
          <div className='col-md-6 col-1g-5 col-12 ft-1'>
           <h2>Details</h2>
            <p> Holiday List
              Track Your Vehicle<br />
              MIS/ERP Login<br />
              Student Verification<br />
              Site Map<br />
              CUTM Timesheet APK<br />
              CUTM Courseware APK
            </p>
            <div className='footer-icon'> 
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className='col-md-6 col-1g-3 col-12 ft-2'>
           <h5>Quick Links</h5>
           <ul>
           <li className="nav">
                <Link className="nav-a" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav">
                <Link className="nav-a" to="/about">About</Link>
              </li>
              <li className="nav">
                <Link className="nav-a" to="/campuse">Campuses</Link>
              </li>
           </ul>
          </div>
          <div className='col-md-6 col-1g-4 col-12 ft-3' >
          <h5>Contacts</h5>
          <p>+7008519377</p>
          <p>subhamsaangi@gmail.com</p>
          <p>Bhubaneswar,Jatani</p>
          </div>
        </div>
      </div>
    </div>
    <div className='base-footer'>
      <p>© 2022 Centurion University | Disclaimer | Privacy Policy | Terms of Use | Blog</p>
    </div>
   
    </>
  )
}
