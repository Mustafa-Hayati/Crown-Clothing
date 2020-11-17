import { createSelector } from "reselect";
import { IApplicationState } from "../store/store";
import {
  IDirectoryItem,
  IDirectoryState,
} from "../types/directoryTypes";

const selectDirectory = (state: IApplicationState) => state.directory;

export const selectDirectorySection = createSelector<
  IApplicationState,
  IDirectoryState,
  IDirectoryItem[]
>([selectDirectory], directory => directory.sections);
