import React from 'react'
import '../Form.css';
import { Link } from 'react-router-dom';
export default function Login() {
    return (


        <div className="container mt-4  ">
        <div className="row justify-content-center ">
            <div className="col-md-6 ">
                <div className="card border rounded shadow">
                    <div className="card-header text-center login">
                        <img src="https://s3.ap-south-1.amazonaws.com/corecampus/images/cutm.jpg" alt="Logo" width="100"/>
                        {/* <h2>Login</h2> */}
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Email Id</label>
                                <input type="text" className="form-control" id="username" name="username" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" required/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login&nbsp;<i className="fas fa-sign-in-alt"></i></button>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <p>Don't have an account? <Link to="/register">Create New Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
