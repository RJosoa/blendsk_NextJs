"use client";

import React, { useState } from "react";

export default function LoginForm() {
  const [values, setValues] = useState({
    identifier: "",
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
    <form
      className="flex flex-col gap-8 w-full"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="username">Username or Email</label>
        <input
          type="text"
          name="identifier"
          placeholder="John Doe or Johndoe@example.xx"
          onChange={(e) => handleChanges(e)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="+6 characters"
          onChange={(e) => handleChanges(e)}
        />
      </div>

      <button
        className="gap-4 p-4 rounded-full border bg-slate-950 text-slate-200 font-medium"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
