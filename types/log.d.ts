export interface LogFetchedDB {
  id: number;
  action: Action | string;
  user: string;
  created_at: string;
}

export type Action =
  | {
      type: "start";
    }
  | {
      type: "pause";
      start_at: string;
    }
  | {
      type: "restart";
    }
  | {
      type: "reset";
    };
