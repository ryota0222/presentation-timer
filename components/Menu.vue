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
} from "@headlessui/vue";
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";

const selected = ref(themes[0]);
const router = useRouter();
const { signOut, user } = useAuth();
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
          class="absolute right-0 mt-2 rounded-md shadow-md p-4 w-64 max-w-screen-sm bg-white dark:bg-black z-50"
        >
          <MenuItem as="div">
            <div>
              <span class="text-xs text-gray-400 mb-2 inline-block"
                >テーマ</span
              >
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
                        :class="theme.classes"
                        class="relative flex cursor-pointer rounded-lg p-2 focus:outline-none"
                      >
                        <div
                          class="flex w-full items-center justify-between relative"
                        >
                          <div class="absolute right-0 top-0">
                            <CheckStatusLabel :checked="checked" />
                          </div>
                          <div class="flex items-center p-2">
                            <div class="text-sm">
                              <RadioGroupLabel
                                as="p"
                                class="font-medium"
                                :class="theme.textClasses"
                              >
                                {{ theme.name }}
                              </RadioGroupLabel>
                              <RadioGroupDescription
                                as="span"
                                class="inline text-xs"
                              >
                                <span :class="theme.textClasses">{{
                                  theme.description
                                }}</span>
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
          </MenuItem>
          <template v-if="user !== null">
            <MenuItem
              as="div"
              class="mt-8 pt-4 border-t-2 border-gray-300 dark:border-gray-600"
            >
              <AppButton :onClick="logout" type="filled" class="w-full"
                >ログアウト</AppButton
              >
            </MenuItem>
          </template>
        </div>
      </MenuItems>
    </Menu>
  </ClientOnly>
</template>
