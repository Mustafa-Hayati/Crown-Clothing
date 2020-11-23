export enum UserActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
  GOOGLE_SIGN_IN_SUCCESS = "GOOGLE_SIGN_IN_SUCCESS",
  GOOGLE_SIGN_IN_FAILURE = "GOOGLE_SIGN_IN_FAILURE",
  EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
  EMAIL_SIGN_IN_SUCCESS = "EMAIL_SIGN_IN_SUCCESS",
  EMAIL_SIGN_IN_FAILURE = "EMAIL_SIGN_IN_FAILURE",
}

export interface IUser {
  id: string;
  displayName: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
  email: string;
}

export interface IUserSetCurrentAction {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: IUser;
}

export interface IUserGoogleSignInStart {
  type: UserActionTypes.GOOGLE_SIGN_IN_START;
}

export interface IUserGoogleSignInSuccess {
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS;
  payload: IUser;
}

export interface IUserGoogleSignInFailure {
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE;
  payload: string;
}

export interface IUserEmailSignInStart {
  type: UserActionTypes.EMAIL_SIGN_IN_START;
  payload: {
    email: string;
    password: string;
  };
}

export interface IUserEmailSignInSuccess {
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS;
  payload: IUser;
}

export interface IUserEmailSignInFailure {
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE;
  payload: string;
}

export type UserActions =
  | IUserSetCurrentAction
  | IUserGoogleSignInStart
  | IUserGoogleSignInSuccess
  | IUserGoogleSignInFailure
  | IUserEmailSignInStart
  | IUserEmailSignInSuccess
  | IUserEmailSignInFailure;

export interface IUserState {
  readonly currentUser: IUser | null;
  readonly error: string;
}
