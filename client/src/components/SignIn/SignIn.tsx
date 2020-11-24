import "./SignIn.scss";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../Redux/actions/userActions";
import { Dispatch } from "redux";
import { UserActions } from "../../Redux/types/userTypes";

interface IProps {
  googleSignInStart: typeof googleSignInStart;
  emailSignInStart: typeof emailSignInStart;
}

const SignIn: FC<IProps> = ({
  googleSignInStart,
  emailSignInStart,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    emailSignInStart(email, password);
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email: string, password: string) =>
      dispatch(
        emailSignInStart({
          email,
          password,
        })
      ),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
