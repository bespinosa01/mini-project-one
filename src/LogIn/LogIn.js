import React from "react";

const LogInView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Login View</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogInView;