<template>
  <UContainer
    class="heyitsjoealongi-theme-blog p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0"
  >
    <ContentRenderer v-if="page" :value="page" class="mb-9" />
  </UContainer>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

// Nuxt Page Meta
definePageMeta({
  // set custom layout
  layout: "blog",
});

// Create SEO Meta Values
const title = page?.value?.title ? page?.value?.title : "heyitsjoealongi";
const description = page?.value?.body?.value?.[3]?.[3]
  ? page?.value?.body?.value?.[3]?.[3]
  : "Advising on resilience, engineering security, and shaping what’s next.";
const url = page?.value?.path
  ? `https://heyitsjoealongi.com${page?.value?.path}`
  : "https://heyitsjoealongi.com/";

// Nuxt SEO
useSeoMeta({
  titleTemplate: "%s",
  title: "heyitsjoealongi - " + title?.toString(),
  ogTitle: title?.toString(),
  ogSiteName: "heyitsjoealongi",
  description: description?.toString(),
  ogDescription: description?.toString(),
  ogUrl: url?.toString(),
  ogType: "article",
  robots: "",
  ogImage: "https://heyitsjoealongi.com/heyitsjoealongi-banner.png",
});
</script>

<style></style>
