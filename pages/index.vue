<template>
  <div class="w-full flex flex-col items-center">
    <div class="img-box" role="presentation">
      <img
        src="/images/logo.svg"
        alt="logo"
        class="mr-2"
        width="64"
        height="64"
      />
    </div>
    <p class="mt-12 mx-auto">
      アプリについては
      <a
        class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
        href="https://ryotanny.notion.site/TIMER-4008f8cdf63049bcad1c75bcf24bcdbb"
        target="_blank"
        >こちら</a
      >
      をご覧ください
    </p>
  </div>
</template>

<style scoped>
.img-box {
  outline: 0px;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px,
    rgba(0, 0, 0, 0.05) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  display: inline-flex;
  padding: 32px;
}
</style>
