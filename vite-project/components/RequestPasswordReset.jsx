import React, { useState } from "react";
import axios from "axios";

const RequestPasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://passwordreset-node-backend.onrender.com/request-password-reset",
        {
          email,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "An error occurred while requesting the password reset"
      );
    }
  };

  return (
    <div className="flex flex-col justify-center p-4 mt-20 mx-auto max-w-xs space-y-4">
      <h2>Request Password Reset</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-3"
          required
        />
        <button type="submit" className="mt-4 bg-green-400 py-2 rounded ">
          Password Reset
        </button>
      </form>
    </div>
  );
};

export default RequestPasswordReset;
