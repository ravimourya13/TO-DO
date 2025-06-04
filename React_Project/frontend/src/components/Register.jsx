import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/register", formData);
      alert("Registration successful!");
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Registration failed.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col mt-3">
          <div className="card">
            <div className="card-body">
              <h2 style={{ marginTop: "20px", color: "dark" }}>Register</h2>
              <form onSubmit={handleSubmit} action="/register" method="POST">
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
                    type="date"
                    className="form-control"
                    name="birthdate"
                    id="birthdate"
                    placeholder="Birthdate"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="formId1">Birthdate</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="formId1">Email</label>
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
                    Register
                  </button>
                </center>
                <center className="mt-3">
                  <a href="/login" className="btn btn-outline-dark">
                    Already have an Account? Login
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

export default Register;
