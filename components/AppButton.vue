<script setup lang="ts">
type Props = {
  onClick: Function;
  type: "outlined" | "filled";
};
const props = defineProps<Props>();
// クラス名をtypeによって切り替え
const classes =
  props.type === "filled"
    ? "bg-black text-white dark:bg-white dark:text-black"
    : "border-black dark:border-white text-black dark:text-white border";
</script>

<template>
  <button
    @click="props.onClick"
    :class="`rounded px-4 py-2 app-button ${classes}`"
  >
    <slot />
  </button>
</template>

<style scoped>
.app-button {
  min-width: 100px;
}
</style>
