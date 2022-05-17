<script setup lang="ts">
const { $setHeight } = useNuxtApp();
onMounted(() => {
  // vhの値の保存
  $setHeight();
  // イベントの生成
  if (process.client) {
    window.addEventListener("resize", $setHeight);
  }
});
onUnmounted(() => {
  window.removeEventListener("resize", $setHeight);
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
