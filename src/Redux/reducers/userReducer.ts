import { Reducer } from "redux";
import {
  IUserState,
  UserActions,
  UserActionTypes,
} from "../types/userTypes";

const initialUserState: IUserState = {
  currentUser: null,
};

export const userReducer: Reducer<IUserState, UserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
