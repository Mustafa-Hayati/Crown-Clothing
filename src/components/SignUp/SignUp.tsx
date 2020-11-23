import "./SignUp.scss";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { Dispatch } from "redux";
import { IUserSignUpStart } from "../../Redux/types/userTypes";
import { signUpStart } from "../../Redux/actions/userActions";

interface IProps {
  signUpStart: typeof signUpStart;
}

const SignUp: FC<IProps> = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      return alert(`Passwords don't match`);
    }

    signUpStart({
      email,
      displayName,
      password,
    });
  };

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "displayName":
        setDisplayName(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={onFormSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          onInputChange={onInputChange}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onInputChange={onInputChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onInputChange={onInputChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onInputChange={onInputChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<IUserSignUpStart>
) => ({
  signUpStart: (userCredentials: {
    email: string;
    password: string;
    displayName: string;
  }) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
