import { LogFetchedDB } from "~/types/log";

export default function () {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  // １列分のデータの挿入
  const insertRow = async <T>(values: T[]) => {
    await client.from<T>("log").insert(values);
  };
  // データの取得
  const fetchLogData = async () => {
    const { data, error } = await client
      .from<LogFetchedDB>("log")
      .select("*")
      .eq("user", user.value.id)
      .order("created_at", { ascending: false })
      .limit(1);
    console.info("get init data:");
    console.info(data);
    return data;
  };
  // データのサブスクライブ
  const subscribeLogData = (callback?: (data: LogFetchedDB) => void) => {
    console.log("subscribeLogData");
    client
      .from<LogFetchedDB>(`log:user=eq.${user.value.id}`)
      .on("*", (payload) => {
        console.info("Change received: ", payload);
        if (callback) {
          callback(payload.new);
        }
      })
      .subscribe();
  };
  // データのサブスクライブの削除
  const removeSubscribeLogData = () => {
    console.log("removeSubscribeLogData");
    client.removeAllSubscriptions();
  };
  return { insertRow, fetchLogData, subscribeLogData, removeSubscribeLogData };
}
