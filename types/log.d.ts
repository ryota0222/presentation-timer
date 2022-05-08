export interface LogFetchedDB {
  id: number;
  action: string;
  user: string;
  created_at: string;
}

export interface LogItem {
  id: number;
  action: Action;
  user: string;
  created_at: string;
}

export type Action =
  | {
      type: "start";
    }
  | {
      type: "pause";
    }
  | {
      type: "restart";
    }
  | {
      type: "reset";
    };
