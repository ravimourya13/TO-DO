import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

axios.defaults.withCredentials = true;

const AdminForm = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email_id: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/session");
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
          // navigate("/home"); // ✅ Redirect if already logged in
        }
      } catch (err) {
        console.error("Session check failed:", err);
      }
    };
    checkSession();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admins",
        formData
      );
      alert("✅ " + response.data.message);
      setFormData({ name: "", phone: "", email_id: "", password: "" });
      setIsLoggedIn(true);
      navigate("/"); // ✅ Redirect to home page
    } catch (err) {
      console.error("Admin registration failed:", err);
      alert("❌ Error: " + (err.response?.data?.error || "Server error"));
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLoggedIn ? "Welcome Admin" : "Admin Registration"}
        </h2>
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="email_id"
              type="email"
              placeholder="Email ID"
              value={formData.email_id}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add Admin
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            🎉 You are logged in as Admin!
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminForm;
