<script setup lang="ts">
import { provideDirection, Direction } from "@/composables/direction";

type Props = {
  direction: Direction;
};
const { direction } = defineProps<Props>();

provideDirection(ref(direction ?? "portrait"));
</script>

<template>
  <slot />
</template>
