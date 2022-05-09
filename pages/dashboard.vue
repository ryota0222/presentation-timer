<script setup lang="ts">
import { LogFetchedDB } from "~/types/log";

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
  return data;
});

onMounted(() => {
  client
    .from<LogFetchedDB>(`log:user=eq.${user.value.id}`)
    .on("*", (payload) => {
      console.info("Change received: ", payload);
      if (logs) {
        logs.value.unshift(payload.new);
      }
    })
    .subscribe();
});

onUnmounted(() => {
  client.removeAllSubscriptions();
});

console.log(logs);
</script>

<template>
  <div>
    <ul>
      <li v-for="log of logs" :key="log.id">{{ log.action.type }}</li>
    </ul>
  </div>
</template>
