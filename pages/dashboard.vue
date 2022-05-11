<script setup lang="ts">
import { Action, LogFetchedDB } from "~/types/log";
definePageMeta({
  middleware: "auth",
});
const { $dayjs } = useNuxtApp();
const { fetchLogData, subscribeLogData, removeSubscribeLogData } =
  useSupabaseDB();
const initialLog = useState<LogFetchedDB[] | undefined>(
  "initialLog",
  () => undefined
);
// マウント時、データ取得
onMounted(async () => {
  const res = await fetchLogData();
  initialLog.value = res;
});
// タイムスタンプの取得
const getTimeStamp = () => {
  const initialLogAction = initialLog.value[0].action;
  const initialLogActionObj =
    typeof initialLogAction === "string"
      ? (JSON.parse(initialLog.value[0].action as string) as Action)
      : initialLogAction;
  const initialLogActionType = initialLogActionObj.type;
  let start = null;
  let end = null;
  if (initialLogActionType === "start") {
    start = $dayjs();
    end = initialLog.value[0].created_at;
  } else if (initialLogActionType === "pause") {
    start = $dayjs(initialLog.value[0].created_at);
    end = initialLogActionObj.start_at;
    console.log(start);
    console.log(end);
  }
  if (start && end) {
    return Math.round(start.diff(end) / 1000);
  }
  return 0;
};
</script>

<template>
  <div v-if="initialLog !== undefined">
    <Timer :initial-log="initialLog" :offset-time-stamp="getTimeStamp()" />
  </div>
</template>
