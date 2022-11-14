<script setup lang="ts">
const { $setHeight } = useNuxtApp();
const route = useRoute();
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk?.length
      ? `${titleChunk} | つながるTIMER`
      : "つながるTIMER";
  },
  meta: [{ property: "og:title", content: `${route.meta.title}` }],
});
onMounted(() => {
  // vhの値の保存
  $setHeight();
  // イベントの生成
  if (process.client) {
    // ページのサイズの変更時とデバイスの回転時発火
    window.addEventListener("resize", $setHeight);
    window.addEventListener("orientationchange", $setHeight);
  }
});
onUnmounted(() => {
  // ページのサイズの変更時とデバイスの回転時発火
  window.removeEventListener("resize", $setHeight);
  window.removeEventListener("orientationchange", $setHeight);
});
</script>

<template>
  <AppContainer>
    <AppHeader />
    <Spacer />
    <NuxtPage />
    <Spacer />
    <AppFooter />
  </AppContainer>
</template>
