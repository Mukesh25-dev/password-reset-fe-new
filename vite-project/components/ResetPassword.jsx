import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://passwordreset-node-backend.onrender.com/reset-password",
        {
          token,
          email,
          newPassword,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "An error occurred while resetting the password"
      );
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Link to="/login">
          <button type="submit">Reset Password</button>
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;
