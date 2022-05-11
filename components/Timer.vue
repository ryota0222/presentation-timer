<script setup lang="ts">
import { useStopwatch } from "vue-timer-hook";
const stopwatch = useStopwatch(0, false);
</script>

<template>
  <div>
    <div>
      <span>{{ stopwatch.days }}</span
      >:<span>{{ stopwatch.hours }}</span
      >:<span>{{ stopwatch.minutes }}</span
      >:<span>{{ stopwatch.seconds }}</span>
    </div>
    <p>{{ stopwatch.isRunning ? "Running" : "Not running" }}</p>
    <button @click="stopwatch.start()">Start</button>
    <button @click="stopwatch.pause()">Pause</button>
    <button @click="stopwatch.reset()">Reset</button>
  </div>
</template>
