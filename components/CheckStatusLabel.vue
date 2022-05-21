<script setup lang="ts">
type Props = {
  checked: boolean;
};
const { checked } = defineProps<Props>();
</script>

<template>
  <template v-if="checked">
    <div
      class="inline-block rounded-full text-xs text-white py-1 px-2 gradient font-bold"
    >
      選択中
    </div>
  </template>
</template>

<style scoped>
.gradient {
  background: linear-gradient(
      38.45deg,
      #9e00ff -1.95%,
      rgba(255, 102, 212, 0.984375) 16.64%,
      rgba(233, 172, 255, 0) 49.6%
    ),
    linear-gradient(
      249.25deg,
      rgba(0, 255, 224, 0.79) -23.07%,
      rgba(162, 255, 89, 0.79) 13.65%,
      rgba(255, 214, 0, 0.11) 46.38%
    ),
    linear-gradient(158.28deg, #ff0000 -8.44%, #ff9a2b 44.44%, #faff00 96.23%);
}
</style>
