import { LogFetchedDB, Action } from "~/types/log";
import { useAuth } from "./useAuth";
import useFireStore from "./useFireStore";

export default function () {
  const { user } = useAuth();
  const { insertRow } = useFireStore();
  const { $dayjs } = useNuxtApp();
  // ログデータの生成
  const generateLogData = (actionObj: Action) => {
    return {
      action: JSON.stringify(actionObj),
      user: user.value.uid,
      created_at: $dayjs().toISOString(),
      timestamp: $dayjs().unix(),
    };
  };
  /**
   * 開始処理
   */
  const handleStart = () =>
    insertRow<Partial<LogFetchedDB>>(generateLogData({ type: "start" }));
  /**
   * 停止処理
   */
  const handlePause = (start_at: string) =>
    insertRow<Partial<LogFetchedDB>>(
      generateLogData({ type: "pause", start_at })
    );
  /**
   * リスタート処理
   */
  const handleRestart = () =>
    insertRow<Partial<LogFetchedDB>>(generateLogData({ type: "restart" }));
  /**
   * リセット処理
   */
  const handleReset = () =>
    insertRow<Partial<LogFetchedDB>>(generateLogData({ type: "reset" }));

  return {
    handleStart,
    handlePause,
    handleRestart,
    handleReset,
  };
}
