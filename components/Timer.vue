<script setup lang="ts">
import { Action, LogFetchedDB } from "~/types/log";
import { useStopwatch } from "vue-timer-hook";
type Props = {
  offsetTimeStamp: number;
  initialLog: LogFetchedDB[];
};
const props = defineProps<Props>();
const AUTO_START = false;
const logs = useState<LogFetchedDB[]>("logs", () => props.initialLog);
const stopwatch = useStopwatch(props.offsetTimeStamp, AUTO_START);
// logの更新
const updateLog = (data: LogFetchedDB) => {
  logs.value.unshift(data);
};
const { handleStart, handlePause, handleRestart, handleReset } = useTimer();
const { subscribeLogData, removeSubscribeLogData } = useSupabaseDB();
// マウント時、ログ情報の監視
onMounted(async () => {
  const callback = (data: LogFetchedDB) => {
    console.log(data);
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
    <button @click="() => handlePause(logs[0].created_at)">Pause</button><br />
    <button @click="handleRestart">Restart</button><br />
    <button @click="handleReset">Reset</button>
    <hr />
    <ul v-if="logs.length">
      <li v-for="log of logs" :key="log.id">
        {{ log.created_at }}: {{ log.action }}
      </li>
    </ul>
  </div>
</template>
