<script setup lang="ts">
type Props = {
  checked: boolean;
};
const { checked } = defineProps<Props>();
</script>

<template>
  <div v-show="checked" class="shrink-0 text-white mr-2">
    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>
