export enum UserActionTypes {
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
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

export interface IUserGoogleSignInStart {
  type: UserActionTypes.GOOGLE_SIGN_IN_START;
}

export interface IUserSignInSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: IUser;
}

export interface IUserSignInFailure {
  type: UserActionTypes.SIGN_IN_FAILURE;
  payload: string;
}

export interface IUserEmailSignInStart {
  type: UserActionTypes.EMAIL_SIGN_IN_START;
  payload: {
    email: string;
    password: string;
  };
}

export type UserActions =
  | IUserGoogleSignInStart
  | IUserEmailSignInStart
  | IUserSignInSuccess
  | IUserSignInFailure;

export interface IUserState {
  readonly currentUser: IUser | null;
  readonly error: string;
}
