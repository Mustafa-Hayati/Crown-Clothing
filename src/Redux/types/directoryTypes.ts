/* NOTE
 * Because we always return the default state, without
 * modifying it, so we won't need any types for action types
 * , action objects. the only type we need is IDirectoryState.
 */

export interface IDirectoryItem {
  title: string;
  imageUrl: string;
  id: number;
  size?: string; // "large" | "small" | "medium"
  linkUrl: string;
}

export interface IDirectoryState {
  readonly sections: IDirectoryItem[];
}
