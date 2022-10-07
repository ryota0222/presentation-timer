import { useAuth } from "@/composables/useAuth";

export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const { checkAuthState, user } = useAuth();
    await checkAuthState();
    if (!user.value) {
      // replaceで遷移
      return await navigateTo("/", { replace: true });
    }
  }
});
