import { initializeApp } from "firebase/app";
import { defineNuxtPlugin } from "#app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const app = initializeApp(config.firebase);
  const db = getFirestore(app);
  return {
    provide: {
      db,
    },
  };
});
