<script setup lang="ts">
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    navigateTo("/dashboard");
  }
});
</script>

<template>
  <div>
    sign in
    <button @click="auth.signIn({ provider: 'github' })">github</button>
  </div>
</template>
