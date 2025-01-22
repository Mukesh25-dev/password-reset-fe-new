import { useState } from "react";
import React from "react";
import instance from "../services/instance";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post("/login", {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Login successfull");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="max-w-xs mx-auto p-4 mt-20 border rounded">
      <h1 className="text-xl mb-4">LOGIN</h1>
      <form className="flex flex-col space-y-3" onSubmit={handleLogin}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button className="bg-blue-500 text-white py-2 rounded ">Login</button>
      </form>
      <div className="mt-4">
        <p className="mt-4">
          Forgot your password?{" "}
          <Link to="/forgot-password" className="text-blue-500 ">
            Forgot password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
