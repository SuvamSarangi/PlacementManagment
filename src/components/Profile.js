import React from 'react'
import StudentNav from '../Layout/StudentNav'
import { Link } from 'react-router-dom';
import View from '../operations/View';
export default function Profile() {
    return (
        <>
            <div>
                <StudentNav />
            
            </div>
            <div className="card-body bg-primary">
                    <Link className='card-text text-white' to="/update">Update Profile</Link>
                </div>
                <View/>
            <div className='base-footer ' style={{ margin: "20.5rem auto" }}>
                <p>© 2022 Centurion University | Disclaimer | Privacy Policy | Terms of Use | Blog</p>
            </div>
        </>
    )
}
