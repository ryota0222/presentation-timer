<script setup lang="ts">
import { Action, LogFetchedDB } from "~/types/log";
import { useStopwatch } from "vue-timer-hook";
import useTimer from "~~/composables/useTimer";
import { useModeSetting } from "~~/composables/useModeSetting";
import useFireStore from "~~/composables/useFireStore";
type Props = {
  offsetTimeStamp: number;
  initialLog: LogFetchedDB[] | null;
};
const props = defineProps<Props>();
const AUTO_START = false;
const logs = useState<LogFetchedDB[]>("logs", () => props.initialLog ?? []);
const stopwatch = useStopwatch(props.offsetTimeStamp, AUTO_START);
const { isReadOnlyMode } = useModeSetting();
// logの更新
const updateLog = (data: LogFetchedDB) => {
  logs.value.unshift(data);
};
const { handleStart, handlePause, handleRestart, handleReset } = useTimer();
const { subscribeLogData, removeSubscribeLogData } = useFireStore();
// マウント時、ログ情報の監視
onMounted(async () => {
  const callback = (data: LogFetchedDB) => {
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
        stopwatch.pause();
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
  <div class="inline-flex items-center timer-container">
    <!-- 時間 -->
    <div class="mb-8 time-wrapper">
      <Time
        :days="stopwatch.days.value"
        :hours="stopwatch.hours.value"
        :minutes="stopwatch.minutes.value"
        :seconds="stopwatch.seconds.value"
        :isRunning="stopwatch.isRunning.value"
      />
    </div>
    <!-- アイコンとボタン -->
    <div class="inline-flex flex-col items-center">
      <div class="mb-8">
        <TimerIcon :isRunning="stopwatch.isRunning.value" />
      </div>
      <template v-if="!isReadOnlyMode">
        <!-- カウント中 -->
        <template v-if="stopwatch.isRunning.value">
          <AppButton
            :onClick="() => handlePause(logs[0].created_at)"
            type="filled"
            >ストップ</AppButton
          ><br />
        </template>
        <!-- カウント停止中 -->
        <template v-else>
          <!-- 00:00:00:00の時 -->
          <template
            v-if="
              stopwatch.days.value === 0 &&
              stopwatch.hours.value === 0 &&
              stopwatch.minutes.value === 0 &&
              stopwatch.seconds.value === 0
            "
            ><AppButton :onClick="handleStart" type="filled">スタート</AppButton
            ><br
          /></template>
          <template v-else>
            <div class="flex-col space-y-4 inline-flex">
              <AppButton :onClick="handleRestart" type="filled">再開</AppButton>
              <AppButton :onClick="handleReset" type="outlined"
                >リセット</AppButton
              >
            </div>
          </template>
        </template>
      </template>
    </div>
    <!-- !ログ一覧：開発中のみ利用 -->
    <!-- <ul v-if="logs.length">
      <li v-for="log of logs" :key="log.id">
        {{ log.created_at }}: {{ log.action }}
      </li>
    </ul> -->
  </div>
</template>

<style scoped>
@media screen and (orientation: portrait) {
  .timer-container {
    flex-direction: column;
  }
}
@media screen and (orientation: landscape) {
  .timer-container {
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
  .timer-container .time-wrapper {
    margin-right: 40px;
  }
}
</style>
