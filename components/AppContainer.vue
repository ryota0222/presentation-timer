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
      <!-- pwa -->
      <Link
        href="splashscreens/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="splashscreens/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
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
