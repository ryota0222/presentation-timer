export interface LogFetchedDB {
  id: string;
  action: Action | string;
  user: string;
  created_at: string;
  timestamp: number;
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
