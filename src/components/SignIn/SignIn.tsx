import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    console.log("====================================");
    console.log(email, ", ", password);
    console.log("====================================");
    setPassword("");
    setEmail("");
    // TODO: Complete the functionality
  };

  const onInputChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={onFormSubmit}>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          value={email}
          onChange={onInputChange}
        />
        <label>Email</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={onInputChange}
        />
        <label>Password</label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignIn;
