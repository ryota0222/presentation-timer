<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";

const { user } = useAuth();
const routeToLogin = () => {
  navigateTo("/login");
};
const routeToTopPage = () => {
  navigateTo("/");
};
</script>

<template>
  <div class="flex items-center justify-between w-full h-10">
    <div class="flex items-center" @click="routeToTopPage" role="button">
      <img
        src="/images/logo.svg"
        alt="logo"
        class="mr-2"
        width="24"
        height="24"
      />
      <h1 class="font-hiragino tracking-widest font-bold">つながるTIMER</h1>
    </div>
    <div class="flex items-center">
      <template v-if="!user">
        <AppButton
          :onClick="routeToLogin"
          type="filled"
          class="mr-8 h-8 text-sm"
          >ログイン</AppButton
        >
      </template>
      <Menu />
    </div>
  </div>
</template>
