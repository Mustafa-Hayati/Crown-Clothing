import { Reducer } from "redux";
import SECTIONS_DATA from "../data/sectionsData";
import { IDirectoryState } from "../types/directoryTypes";

const InitialDirectoryState: IDirectoryState = {
  sections: SECTIONS_DATA,
};

/* NOTE
 * We don't have an action type for the reducer, because
 * we'll always return the default state.
 */
export const directoryReducer: Reducer<IDirectoryState> = (
  state = InitialDirectoryState,
  action
): IDirectoryState => {
  switch (action.type) {
    default:
      return state;
  }
};
