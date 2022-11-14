<script setup lang="ts">
import { META_TITLE, META_DESCRIPTION, META_URL } from "~~/consts/config";
</script>

<template>
  <Html lang="ja" prefix="og: http://ogp.me/ns#">
    <Head>
      <Title>{{ META_TITLE }}</Title>
      <Meta name="description" :content="META_DESCRIPTION" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@RyoTa___0222" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" :content="META_TITLE" />
      <Meta property="og:url" :content="META_URL" />
      <Meta property="og:description" :content="META_DESCRIPTION" />
      <Meta
        property="og:image"
        content="https://tsunagaru-timer.ryotanny.com/og-image.png"
      />
      <Meta property="og:site_name" :content="META_TITLE" />
      <!-- pwa（meta） -->
      <Meta name="mobile-web-app-capable" content="yes" />
      <Meta name="apple-mobile-web-app-capable" content="yes" />
      <Meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <Meta name="apple-mobile-web-app-title" :content="META_TITLE" />
      <Link
        rel="apple-touch-icon"
        size="152x152"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon alternate"
        type="image/png"
        size="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon alternate"
        type="image/png"
        size="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="icon alternate" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
      <!-- pwa（link） -->
      <Link
        href="/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <Link
        href="/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <!-- link -->
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div
      class="bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-50 min-h-screen min-h-screenDvh"
    >
      <div
        class="container mx-auto px-4 min-h-screen min-h-screenDvh flex flex-col items-center"
      >
        <slot />
      </div>
    </div>
  </Html>
</template>

<style>
body {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
}
</style>
