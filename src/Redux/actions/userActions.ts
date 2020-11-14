import { ActionCreator /* , AnyAction, Dispatch */ } from "redux";

import {
  IUser,
  IUserSetCurrentAction,
  UserActionTypes,
} from "../types/userTypes";

export const setCurrentUser: ActionCreator<IUserSetCurrentAction> = (
  user: IUser
) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
