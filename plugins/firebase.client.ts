import { initializeApp } from "firebase/app";
import { defineNuxtPlugin } from "#app";
import { firebaseConfig } from "@/consts/firebase-config";

export default defineNuxtPlugin(() => {
  initializeApp(firebaseConfig);
});
