<script setup lang="ts">
const route = useRoute();
useHead({
  meta: [{ property: "og:title", content: `${route.meta.title}` }],
});
</script>

<template>
  <slot />
</template>
