<script setup lang="ts">
type Props = {
  isRunning: boolean;
};
const { isRunning } = defineProps<Props>();
</script>

<template>
  <div :class="`relative inline-block ${isRunning ? 'animation' : ''}`">
    <svg
      width="157"
      height="157"
      viewBox="0 0 157 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M98.125 6.54163H58.875V19.625H98.125V6.54163ZM124.488 48.3429L133.777 39.0537C130.964 35.7175 127.89 32.5775 124.553 29.83L115.264 39.1191C105.125 31.0075 92.3683 26.1666 78.5 26.1666C45.9879 26.1666 19.625 52.5295 19.625 85.0416C19.625 117.554 45.9225 143.917 78.5 143.917C111.077 143.917 137.375 117.554 137.375 85.0416C137.375 71.1733 132.534 58.417 124.488 48.3429ZM78.5 130.833C53.1838 130.833 32.7083 110.358 32.7083 85.0416C32.7083 59.7254 53.1838 39.25 78.5 39.25C103.816 39.25 124.292 59.7254 124.292 85.0416C124.292 110.358 103.816 130.833 78.5 130.833Z"
        class="fill-black dark:fill-white"
      />
    </svg>
    <div class="clock-hand absolute bg-black dark:bg-white" />
  </div>
</template>

<style scoped>
.clock-hand {
  width: 24%;
  height: 10px;
  top: 50%;
  left: 50%;
  transform-origin: left;
  transform: rotate(0deg);
  animation: Rotate 8s infinite linear;
  animation-play-state: paused;
}
.animation .clock-hand {
  animation-play-state: running;
}
@keyframes Rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  0% {
    transform: rotate(-360deg);
  }
}
</style>
