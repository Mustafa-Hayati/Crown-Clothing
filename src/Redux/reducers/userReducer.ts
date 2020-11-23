import { Reducer } from "redux";
import {
  IUserState,
  UserActions,
  UserActionTypes,
} from "../types/userTypes";

const initialUserState: IUserState = {
  currentUser: null,
  error: "",
};

export const userReducer: Reducer<IUserState, UserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: "",
      };

    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
