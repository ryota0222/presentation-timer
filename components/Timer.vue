<script setup lang="ts">
import { Action, LogFetchedDB } from "~/types/log";
const logs = useState<LogFetchedDB[]>("logs", () => []);
// logの更新
const updateLog = (data: LogFetchedDB) => {
  // const copy = logs.value.slice();
  // copy.unshift(data);
  logs.value.unshift(data);
};
const { handleStart, handlePause, handleRestart, handleReset, stopwatch } =
  useTimer();
const { fetchLogData, subscribeLogData, removeSubscribeLogData } =
  useSupabaseDB();
// マウント時、ログ情報の監視
onMounted(async () => {
  const res = await fetchLogData();
  logs.value.unshift(res[0]);
  const callback = (data: LogFetchedDB) => {
    console.log("call");
    if (logs) {
      updateLog(data);
    }
  };
  subscribeLogData(callback);
});
// アンマウント時、監視を解除
onUnmounted(() => {
  removeSubscribeLogData();
});
watchEffect(() => {
  if (logs.value.length) {
    const action =
      typeof logs.value[0].action === "string"
        ? (JSON.parse(logs.value[0].action as string) as Action)
        : logs.value[0].action;
    switch (action.type) {
      case "start":
        stopwatch.start();
        break;
      case "pause":
        stopwatch.pause();
        break;
      case "reset":
        stopwatch.reset();
        break;
      case "restart":
        stopwatch.start();
        break;
      default:
        return;
    }
  }
});
</script>

<template>
  <div>
    <div>
      <span>{{ stopwatch.days }}</span
      >:<span>{{ stopwatch.hours }}</span
      >:<span>{{ stopwatch.minutes }}</span
      >:<span>{{ stopwatch.seconds }}</span>
    </div>
    <p>{{ stopwatch.isRunning.value ? "Running" : "Not running" }}</p>
    <button @click="handleStart">Start</button><br />
    <button @click="handlePause">Pause</button><br />
    <button @click="handleRestart">Restart</button><br />
    <button @click="handleReset">Reset</button>
    <hr />
    <ul v-if="logs.length">
      <li v-for="log of logs" :key="log.id">
        {{ log.action }}
      </li>
    </ul>
  </div>
</template>
