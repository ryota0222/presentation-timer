<script setup lang="ts">
import { themes } from "@/consts/config";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription,
  Switch,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { useModeSetting } from "~~/composables/useModeSetting";
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";

const selected = ref(themes[0]);
const router = useRouter();
const { signOut, user } = useAuth();
const { isReadOnlyMode } = useModeSetting();
// ログアウト処理
const logout = async () => {
  await signOut();
  router.push("/");
};
// テーマが切り替わったらhtmlタグのクラス切り替え
watchEffect(() => {
  if (process.client) {
    if (selected.value.name === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
});
</script>

<template>
  <ClientOnly>
    <Menu as="div" class="relative">
      <MenuButton as="template">
        <div
          class="h-3 w-8 border-t border-b border-black dark:border-white cursor-pointer"
        ></div>
      </MenuButton>
      <MenuItems as="template">
        <div
          class="absolute right-0 mt-2 rounded-md shadow-md p-4 w-80 max-w-screen-md bg-white dark:bg-black z-50"
        >
          <div>
            <span class="text-xs text-gray-400 mb-2 inline-block">テーマ</span>
            <div class="mx-auto w-full max-w-md">
              <RadioGroup v-model="selected">
                <RadioGroupLabel class="sr-only">Color Theme</RadioGroupLabel>
                <div class="space-y-2">
                  <RadioGroupOption
                    as="template"
                    v-for="theme in themes"
                    :key="theme.name"
                    :value="theme"
                    v-slot="{ checked }"
                  >
                    <div
                      :class="
                        checked
                          ? 'text-white border-gray-200 gradient border'
                          : 'text-stone-900 bg-white border-gray-200 border'
                      "
                      class="relative flex cursor-pointer rounded-lg p-2 focus:outline-none"
                    >
                      <div
                        class="flex w-full items-center justify-between relative"
                      >
                        <div class="absolute right-0 top-0">
                          <template v-if="checked">
                            <div v-show="checked" class="shrink-0 text-white">
                              <svg
                                class="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="12"
                                  fill="#fff"
                                  fill-opacity="0.2"
                                />
                                <path
                                  d="M7 13l3 3 7-7"
                                  stroke="#fff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </template>
                        </div>
                        <div class="flex items-center p-2">
                          <img
                            src="@/assets/images/sun.svg"
                            alt="twitter"
                            class="mr-4"
                            v-if="theme.name === 'light'"
                          />
                          <img
                            src="@/assets/images/moon.svg"
                            alt="twitter"
                            class="mr-4"
                            v-if="theme.name === 'dark'"
                          />
                          <div class="text-sm">
                            <RadioGroupLabel
                              as="p"
                              class="font-medium"
                              :class="checked ? 'text-white' : 'text-stone-900'"
                            >
                              {{ theme.name }}
                            </RadioGroupLabel>
                            <RadioGroupDescription
                              as="span"
                              class="inline text-xs"
                            >
                              <span
                                :class="
                                  checked ? 'text-white' : 'text-stone-900'
                                "
                                >{{ theme.description }}</span
                              >
                            </RadioGroupDescription>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
          </div>
          <template v-if="user !== null">
            <div class="mt-4 pt-4">
              <div>
                <span class="text-xs text-gray-400 mb-2 inline-block"
                  >モード</span
                >
                <p>閲覧モードと操作モードがあります</p>
                <SwitchGroup as="div" class="flex mt-3 items-center space-x-4">
                  <Switch
                    v-model="isReadOnlyMode"
                    :class="
                      isReadOnlyMode
                        ? 'bg-blue-700'
                        : 'bg-gray-200 dark:bg-gray-700'
                    "
                    class="relative inline-flex h-[30px] w-[66px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    <span class="sr-only">Mode Setting</span>
                    <span
                      aria-hidden="true"
                      :class="
                        isReadOnlyMode ? 'translate-x-9' : 'translate-x-0'
                      "
                      class="pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                    />
                  </Switch>
                  <SwitchLabel>{{
                    isReadOnlyMode ? "閲覧モード" : "操作モード"
                  }}</SwitchLabel>
                </SwitchGroup>
              </div>
            </div>
            <MenuItem
              as="div"
              class="mt-8 pt-4 border-t-2 border-gray-300 dark:border-gray-600"
            >
              <AppButton :onClick="logout" type="filled" class="w-full py-2"
                >ログアウト</AppButton
              >
            </MenuItem>
          </template>
        </div>
      </MenuItems>
    </Menu>
  </ClientOnly>
</template>

<style scoped>
.gradient {
  background: linear-gradient(92.04deg, #650767 1.49%, #00154a 97.76%);
}
</style>
