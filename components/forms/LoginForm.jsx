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
    <div className="p-20">
      <h3>Sign in to Blendsk</h3>

      <form
        className="flex flex-col gap-4"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="username">username or email</label>
          <input
            type="text"
            name="identifier"
            placeholder="John Doe or Johndoe@example.xx"
            onChange={(e) => handleChanges(e)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            onChange={(e) => handleChanges(e)}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
