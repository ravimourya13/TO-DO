import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Login() {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", credentials);
      if (res.data.success) {
        alert("Login successful!");
        navigate("/home");
      } else {
        alert("Invalid name or password");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
  
    <div className="container">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col mt-3">
          <div className="card">
            <div className="card-body">
              <h2 style={{ marginTop: "20px", color: "dark" }}>Login</h2>
              <form onSubmit={handleSubmit} action="/login" method="POST">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="formId1">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="formId1">Password</label>
                </div>
                <center>
                  <button type="submit" className="btn btn-outline-dark">
                    Login
                  </button>
                </center>
                <center className="mt-3">
                  <a href="/register" className="btn btn-outline-dark">
                    Dont have an Account? Register
                  </a>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
