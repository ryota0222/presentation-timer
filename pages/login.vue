<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";

useHead({
  title: `ログイン`,
});

const { user, signInWithGitHub, signInWithGoogle, signInWithTwitter } =
  useAuth();

watchEffect(() => {
  if (user.value) {
    navigateTo("/dashboard");
  }
});
</script>

<template>
  <div class="w-full">
    <h1 class="font-bold text-center">ログイン</h1>
    <div class="mt-12 max-w-xs mx-auto flex flex-col space-y-4">
      <!-- GitHub -->
      <button
        @click="signInWithGitHub"
        class="flex justify-center items-center bg-black dark:bg-white p-3 rounded-md"
      >
        <GithubIcon class="fill-white dark:fill-black mr-4" />
        <span class="text-white dark:text-black">GitHub</span>
      </button>
      <!-- Twitter -->
      <button
        @click="signInWithTwitter"
        class="flex justify-center items-center bg-sky-500 p-3 rounded-md"
      >
        <img src="@/assets/images/twitter.svg" alt="twitter" class="mr-4" />
        <span class="text-white">Twitter</span>
      </button>
      <!-- Google -->
      <button
        @click="signInWithGoogle"
        class="flex justify-center items-center bg-white dark:bg-black p-3 rounded-md border-2 border-black dark:border-white"
      >
        <img src="@/assets/images/google.svg" alt="google" class="mr-4" />
        <span class="text-black dark:text-white">Google</span>
      </button>
    </div>
  </div>
</template>
