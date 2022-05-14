<script setup lang="ts">
const title = "Presentation Watch";
const description =
  "プレゼンテーションの時間管理を行うアプリケーションです。同じアカウントでログインしていただくと同期的に時間の管理が可能です。";
const url = "https://presentation-timer.ryotanny.com";
</script>

<template>
  <Html lang="ja">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:url" :content="url" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:image" content="/og-image.png" />
      <Meta property="og:site_name" :content="title" />
      <Link
        rel="apple-touch-icon"
        size="152x152"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        size="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        size="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <div
      class="bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 min-h-screen"
    >
      <div
        class="container mx-auto px-4 min-h-screen flex flex-col items-center"
      >
        <slot />
      </div>
    </div>
  </Html>
</template>
