"use client";

import React, { useState } from "react";

export default function SignupForm() {
  const [values, setValues] = useState({
    email: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="flex flex-col gap-4" method="POST" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label htmlFor="username">Name</label>
          <input type="text" name="name" onChange={(e) => handleChanges(e)} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={(e) => handleChanges(e)}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Email</label>
        <input type="email" name="email" onChange={(e) => handleChanges(e)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="6+ characters"
          onChange={(e) => handleChanges(e)}
        />
      </div>

      <button
        className="gap-4 p-4 rounded-full border bg-slate-950 text-slate-200 font-medium"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
}
