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
    :class="`inline-block time-container font-oswald not-italic font-normal text-5xl text-black dark:text-white ${
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
  width: 240px;
}
</style>
