<script setup lang="ts">
type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
};
const { days, hours, minutes, seconds, isRunning } = defineProps<Props>();
</script>

<template>
  <div
    :class="`inline-block time-container text-black dark:text-white ${
      isRunning ? 'opacity-100' : 'opacity-50'
    }`"
  >
    <span>{{ String(days).padStart(2, "0") }}</span
    >:<span>{{ String(hours).padStart(2, "0") }}</span
    >:<span>{{ String(minutes).padStart(2, "0") }}</span
    >:<span>{{ String(seconds).padStart(2, "0") }}</span>
  </div>
</template>

<style scoped>
.time-container {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  width: 240px;
}
</style>
