import { LogFetchedDB, Action } from "~/types/log";
// 設定値
const OFFSET_TIME_STAMP = 0;
const AUTO_START = false;

export default function () {
  const user = useSupabaseUser();
  const { insertRow } = useSupabaseDB();
  // ログデータの生成
  const generateLogData = (actionObj: Action) => {
    return { action: JSON.stringify(actionObj), user: user.value.id };
  };
  /**
   * 開始処理
   */
  const handleStart = () =>
    insertRow<Partial<LogFetchedDB>>([generateLogData({ type: "start" })]);
  /**
   * 停止処理
   */
  const handlePause = (start_at: string) =>
    insertRow<Partial<LogFetchedDB>>([
      generateLogData({ type: "pause", start_at }),
    ]);
  /**
   * リスタート処理
   */
  const handleRestart = () =>
    insertRow<Partial<LogFetchedDB>>([generateLogData({ type: "restart" })]);
  /**
   * リセット処理
   */
  const handleReset = () =>
    insertRow<Partial<LogFetchedDB>>([generateLogData({ type: "reset" })]);

  return {
    handleStart,
    handlePause,
    handleRestart,
    handleReset,
  };
}
