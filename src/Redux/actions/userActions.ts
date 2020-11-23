import { ActionCreator /* , AnyAction, Dispatch */ } from "redux";

import {
  IUser,
  IUserEmailSignInFailure,
  IUserEmailSignInStart,
  IUserEmailSignInSuccess,
  IUserGoogleSignInFailure,
  IUserGoogleSignInStart,
  IUserGoogleSignInSuccess,
  IUserSetCurrentAction,
  UserActionTypes,
} from "../types/userTypes";

export const setCurrentUser: ActionCreator<IUserSetCurrentAction> = (
  user: IUser
) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart: ActionCreator<IUserGoogleSignInStart> = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess: ActionCreator<IUserGoogleSignInSuccess> = (
  user: IUser
) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure: ActionCreator<IUserGoogleSignInFailure> = (
  error: string
) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error,
});

// REVIEW: Check th email and password type again.
export const emailSignInStart: ActionCreator<IUserEmailSignInStart> = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess: ActionCreator<IUserEmailSignInSuccess> = (
  user: IUser
) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure: ActionCreator<IUserEmailSignInFailure> = (
  error: string
) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});
