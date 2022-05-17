import type { Ref } from "vue";
import { Action, LogFetchedDB } from "~/types/log";

type Params = LogFetchedDB[] | undefined | null;

export const updateInitialLog = (ref: Ref<Params>) => (data: Params) => {
  console.log("data: ");
  console.log(data);
  ref.value = data;
};
export const useInitialLog = () => {
  const value = useState<Params>("initialLog", () => undefined);
  return {
    initialLog: value,
    setInitialLog: updateInitialLog(value),
  };
};
