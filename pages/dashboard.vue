<script setup lang="ts">
import { Action } from "~/types/log";
import useFireStore from "~~/composables/useFireStore";
import { useInitialLog } from "~~/composables/useInitialLog";
import { META_TITLE } from "~~/consts/config";

useHead({
  title: `ダッシュボード | ${META_TITLE}`,
});

definePageMeta({
  middleware: "auth",
});
const { $dayjs } = useNuxtApp();
const { fetchLogData } = useFireStore();
const { initialLog, setInitialLog } = useInitialLog();

// マウント時、データ取得
onMounted(async () => {
  const res = await fetchLogData();

  if (res && res[0] && res[0]?.action) {
    setInitialLog(res);
  } else {
    setInitialLog(null);
  }
});
// タイムスタンプの取得
const getTimeStamp = () => {
  if (initialLog.value) {
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
    }
    if (start && end) {
      return Math.round(start.diff(end) / 1000);
    }
  }
  return 0;
};
</script>

<template>
  <div v-if="initialLog !== undefined" class="flex justify-center">
    <Timer :initial-log="initialLog" :offset-time-stamp="getTimeStamp()" />
  </div>
</template>
