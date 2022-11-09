import type { Ref } from "vue";

export const useModeSetting = () => {
  const value = useState("isReadOnlyMode", () => false);
  return {
    isReadOnlyMode: value,
    setIsReadOnlyMode: (ref: Ref<boolean>) => (flg: boolean) => {
      ref.value = flg;
    },
  };
};
