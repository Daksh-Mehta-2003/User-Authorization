import React, { useState } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import EmployeeService from "../Services/EmployeeService";
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    if (email === "" || password === "") {
      alert("Enter Valid Data");
    } else {
    await EmployeeService.loginUser(newEntry).then((response) => {
        console.log(response.data);

        if (response.data.success) {
          alert("login succesfull");
        } else {
          alert("invalid");
        }
      });
    }

    setAllEntry([...allEntry, newEntry]);
  };


  return (
    <>
      <div className="wrapper">
        <form action="" onSubmit={submitForm}>
          <h1>Login</h1>
          <div className="input-box">
            <FaUser />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              values={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FaLock />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <button type="submit">
            <Link to="/LandingPage">Login</Link>
              <a href="/LandingPage"></a></button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
