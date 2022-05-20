<script setup lang="ts">
const { $setHeight } = useNuxtApp();
onMounted(() => {
  // vhの値の保存
  $setHeight();
  // イベントの生成
  if (process.client) {
    // ページのサイズの変更時とデバイスの回転時
    window.addEventListener("resize orientationchange", $setHeight);
  }
});
onUnmounted(() => {
  // ページのサイズの変更時とデバイスの回転時
  window.removeEventListener("resize orientationchange", $setHeight);
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
