import { ActionCreator /* , AnyAction, Dispatch */ } from "redux";

import {
  IUser,
  IUserEmailSignInStart,
  IUserGoogleSignInStart,
  UserActionTypes,
  IUserSignInSuccess,
  IUserSignInFailure,
  IUserCheckUserSession,
} from "../types/userTypes";

export const googleSignInStart: ActionCreator<IUserGoogleSignInStart> = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess: ActionCreator<IUserSignInSuccess> = (
  user: IUser
) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure: ActionCreator<IUserSignInFailure> = (
  error: string
) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart: ActionCreator<IUserEmailSignInStart> = (emailAndPassword: {
  email: string;
  password: string;
}) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession: ActionCreator<IUserCheckUserSession> = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
