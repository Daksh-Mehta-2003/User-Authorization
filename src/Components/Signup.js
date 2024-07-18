import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  // const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { fullname, username, email, password, address };
    if ( fullname === "" || password === "" || username === "" ||  email === "" || address === "") {
      alert("Enter Valid Data");
    } else {

      try{
        EmployeeService.create(newEntry).then((response) => {
          console.log(response.data);
          alert("Employee Registered Successfully");
        });
      }catch(error){
        console.log(error)
      }
      
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitForm}>
          <div className="header">
            <div className="text">Sign Up</div>
          </div>
          <div className="input">
            <div className="input">
              Full Name
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="input">
              User Name
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input">
              Email
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              Password
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input">
              Address
              <input
                type="address"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="submit-container">
              <div className="submit">
                <button type="submit">Sign Up</button>
              </div>
            </div>
            <div className="input">
              <Link to="/Login">Already have a account</Link>
              <a href="/Login"></a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
