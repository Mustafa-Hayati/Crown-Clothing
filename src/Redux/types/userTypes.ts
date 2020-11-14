export enum UserActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
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

export type UserActions = IUserSetCurrentAction;

export interface IUserState {
  readonly currentUser: IUser | null;
}
