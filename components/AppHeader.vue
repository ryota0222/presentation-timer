<script setup lang="ts">
const router = useRouter();
const client = useSupabaseClient();
const user = useSupabaseUser();
const logout = async () => {
  await client.auth.signOut();
  router.push("/");
};
</script>

<template>
  <div>
    <h1>presentation-timer</h1>
    <button v-if="user" class="u-text-white" @click="logout">Logout</button>
  </div>
</template>
