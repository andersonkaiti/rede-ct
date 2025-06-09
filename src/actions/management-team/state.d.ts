export interface IErrors {
  errors: {
    name?: string[];
    members?: string[];
  };
}

export interface ISuccess {
  success: boolean;
}

export type State = IErrors | ISuccess | null;
