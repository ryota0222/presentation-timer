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
} from "@headlessui/vue";
import { ref } from "vue";
const selected = ref(themes[0]);
const router = useRouter();
const client = useSupabaseClient();
const user = useSupabaseUser();
// ログアウト処理
const logout = async () => {
  await client.auth.signOut();
  router.push("/");
};
// テーマが切り替わったらhtmlタグのクラス切り替え
watchEffect(() => {
  if (window) {
    if (selected.value.name === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
});
</script>

<template>
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
            <span class="text-xs text-gray-400 mb-2 inline-block">テーマ</span>
            <div class="mx-auto w-full max-w-md">
              <RadioGroup v-model="selected">
                <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                <div class="space-y-2">
                  <RadioGroupOption
                    as="template"
                    v-for="theme in themes"
                    :key="theme.name"
                    :value="theme"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active
                          ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-300'
                          : '',
                        checked
                          ? 'bg-gray-900 bg-opacity-75 text-white '
                          : 'bg-white ',
                      ]"
                      class="relative flex cursor-pointer rounded-lg p-2 py-3 focus:outline-none"
                    >
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center">
                          <CheckIcon :checked="checked" />
                          <div class="text-sm">
                            <RadioGroupLabel
                              as="p"
                              :class="checked ? 'text-white' : 'text-gray-900'"
                              class="font-medium"
                            >
                              {{ theme.name }}
                            </RadioGroupLabel>
                            <RadioGroupDescription
                              as="span"
                              :class="
                                checked ? 'text-gray-100' : 'text-gray-500'
                              "
                              class="inline text-xs"
                            >
                              <span>{{ theme.description }}</span>
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
        <template v-if="user">
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
</template>
