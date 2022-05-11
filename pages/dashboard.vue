<script setup lang="ts">
import { LogFetchedDB } from "~/types/log";
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
</script>

<template>
  <div v-if="initialLog !== undefined">
    <Timer
      :initial-log="initialLog"
      :offset-time-stamp="
        Math.round($dayjs().diff(initialLog[0].created_at) / 1000)
      "
    />
  </div>
</template>
