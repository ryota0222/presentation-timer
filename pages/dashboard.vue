<script setup lang="ts">
import { LogFetchedDB, LogItem } from "~/types/log";

definePageMeta({
  middleware: "auth",
});

const client = useSupabaseClient();
const user = useSupabaseUser();

const { data: logs } = await useAsyncData("log", async () => {
  const { data, error } = await client
    .from<LogFetchedDB>("log")
    .select("*")
    .eq("user", user.value.id)
    .order("created_at", { ascending: false })
    .limit(1);
  console.info("get init data:");
  console.log(data);
  return data.map((item) => {
    return {
      ...item,
      action: JSON.parse(item.action),
    };
  }) as LogItem[];
});

onMounted(() => {
  client
    .from<LogFetchedDB>(`log:user=eq.${user.value.id}`)
    .on("*", (payload) => {
      console.info("Change received: ", payload);
      if (logs) {
        logs.value.unshift({
          ...payload.new,
          action: JSON.parse(payload.new.action),
        });
      }
    })
    .subscribe();
});

onUnmounted(() => {
  client.removeAllSubscriptions();
});
</script>

<template>
  <div>
    <ul>
      <li v-for="log of logs" :key="log.id">{{ log.action.type }}</li>
    </ul>
  </div>
</template>
