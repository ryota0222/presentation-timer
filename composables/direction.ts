import { InjectionKey, inject, Ref, provide, readonly } from "vue";

export type Direction = "portrait" | "landscape";
export type DirectionRef = Ref<Direction>;

export const DirectionSymbol: InjectionKey<DirectionRef> = Symbol();

export function provideDirection(Direction: DirectionRef) {
  provide(DirectionSymbol, Direction);
}

export function useDirection() {
  const t = inject(DirectionSymbol);
  if (!t) {
    throw new Error("useDirection() is called without provider.");
  }

  const direction = readonly(t);
  const setDirection = (Direction: Direction) => (t.value = Direction);
  return { direction, setDirection };
}
