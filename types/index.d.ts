import dayjs from "dayjs";
import { Firestore } from "firebase/firestore";

declare module "#app" {
  interface NuxtApp {
    $dayjs: (date?: dayjs.ConfigType) => dayjs.Dayjs;
    $setHeight: () => void;
    $db: Firestore;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $dayjs: (date?: dayjs.ConfigType) => dayjs.Dayjs;
    $setHeight: () => void;
    $db: Firestore;
  }
}

export {};
