import { createSelector } from "reselect";
import { IApplicationState } from "../store/store";
import { IUser, IUserState } from "../types/userTypes";

const selectUser = (state: IApplicationState): IUserState =>
  state.user;

export const selectCurrentUser = createSelector<
  IApplicationState,
  IUserState,
  IUser | null
>([selectUser], user => user.currentUser);
