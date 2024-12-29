export interface Tag {
  id: number;
  name: string;
  active: boolean;
}

// todo introduce 'real' actions?!  use ToggleAllTagsAction
export interface ToggleTagAction {
  ids: number[];
  active: boolean;
}
