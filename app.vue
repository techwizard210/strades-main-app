<script setup lang="ts">
definePageMeta({
  title: "Strades",
  description: "Strades Social Trading Platform",
  layout: "default",
}),
  useSeoMeta({
    titleTemplate: "Strades | %s",
    description: "Strades Social Trading Platform",
    ogImage: "https://example.com/cover.jpg",
    ogImageAlt: "Strades",
    twitterImage: "https://example.com/cover.jpg",
    twitterSite: "@strades",
    twitterCreator: "@strades",
    twitterCard: "summary_large_image",
  }),
  useHead({
    link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }],
  });
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
@font-face {
  font-family: Ethnocentric;
  src: url("@/assets/fonts/ethnocentric-rg.otf") format("opentype");
}

@font-face {
  font-family: Poppin;
  src: url("@/assets/fonts/Poppins-Regular.ttf");
}

@font-face {
  font-family: Kanit;
  src: url("@/assets/fonts/Kanit-Regular.ttf");
}

@font-face {
  font-family: MediumFont;
  src: url("@/assets/fonts/Medium.ttf");
}

@font-face {
  font-family: SemiBoldItalic;
  src: url("@/assets/fonts/SemiBoldItalic.ttf");
}

.stroke-shadow {
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.uni-border {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 8px,
    rgba(0, 0, 0, 0.02) 0px 16px 24px, rgba(0, 0, 0, 0.02) 0px 24px 32px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.19);
}

.profit-border {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 8px,
    rgba(0, 0, 0, 0.02) 0px 16px 24px, rgba(0, 0, 0, 0.02) 0px 24px 32px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(49, 208, 170, 0.5);
}

.loss-border {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 4px 8px,
    rgba(0, 0, 0, 0.02) 0px 16px 24px, rgba(0, 0, 0, 0.02) 0px 24px 32px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(237, 75, 158, 0.5);
}

::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #3e3e42;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #555;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #5f5f5f;
}
</style>
