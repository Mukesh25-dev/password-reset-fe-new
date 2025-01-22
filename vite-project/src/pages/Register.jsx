import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import instance from "../services/instance";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required!");
      return; // Stops navigation
    }

    try {
      const response = await instance.post("/register", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Registration successfull");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }

    navigate("/login");
  };
  return (
    <div className=" max-w-xs mx-auto p-4 mt-20 border rounded flex flex-col">
      <h1 className="text-xl mb-4">Register</h1>
      <form className="flex flex-col space-y-3" onSubmit={handleRegister}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white py-2 rounded " type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
