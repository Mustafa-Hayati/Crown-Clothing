import "./SignIn.scss";
import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

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
        <FormInput
          type="email"
          name="email"
          // autoComplete="off"
          value={email}
          onInputChange={onInputChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onInputChange={onInputChange}
          label="password"
        />
        <CustomButton type="submit">Sign In</CustomButton>
        {/* <input type="submit" value="Submit Form" /> */}
      </form>
    </div>
  );
};

export default SignIn;
