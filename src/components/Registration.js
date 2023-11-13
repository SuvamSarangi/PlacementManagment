import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    dob: "",
    branch: "",
    phoneNo: ""
  })
  {/* deconstruct the object*/ }

  const { firstName, lastName, email, password, gender, address, dob, branch, phoneNo } = user
  const onInputChange = (e) => {
    {/* ...user= spread operater->adding new update*/ }
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/students/save", user);
    alert("post successfully");
  
    navigate("/")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor='Name' className='form-label'>First Name</label>
              <input type={'text'} className='form-control'
                placeholder='Enter your name'
                name='firstName'
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor='Username' className='form-label'>last Name</label>
              <input type={'text'} className='form-control'
                placeholder='Enter your username'
                name='lastName'
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}

                required>
              </textarea>
            </div>
            <div className="mb-3">
              <div className="">
                <label htmlFor="inputState" className="form-label">Gender</label>
                <select id="inputState"
                  className="form-select"
                  value={gender}
                  onChange={(e) => onInputChange(e)}
                  name="gender">
                  <option ></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}

                required />
            </div>
            <div className="mb-3">
              <div className="">
                <label htmlFor="inputState" className="form-label">Branch</label>
                <select id="inputGroup"
                  className="form-select"
                  name="branch"
                  value={branch}
                  onChange={(e) => onInputChange(e)}>
                  <option ></option>
                  <option value="b-tech">B-Tech</option>
                  <option value="mca">MCA</option>
                  <option value="m-tech">M-Tech</option>
                  <option value="bca">BCA</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel"
                className="form-control"
                id="phone"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => onInputChange(e)}
                required />
            </div>
            <div className="mb-3">
              <label htmlFor='Email' className='form-label'>E-mail</label>
              <input type={'text'} className='form-control'
                placeholder='Enter your E-mail'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}

                required />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>
      </div>

    </div>
  )
}
