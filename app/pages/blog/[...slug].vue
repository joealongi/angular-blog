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

// Nuxt SEO
useSeoMeta({
  titleTemplate: "%s",
  title: page?.title ? page?.title : "heyitsjoealongi",
  ogTitle: page?.title ? page?.title : "heyitsjoealongi",
  siteName: "heyitsjoealongi",
  ogSiteName: "heyitsjoealongi",
  description: page?.body?.value?.[3]?.[3]
    ? page?.body?.value?.[3]?.[3]
    : "Advising on resilience, engineering security, and shaping what’s next.",
  ogDescription: page?.body?.value?.[3]?.[3]
    ? page?.body?.value?.[3]?.[3]
    : "Advising on resilience, engineering security, and shaping what’s next.",
  url: page?.path
    ? `https://heyitsjoealongi.com${page?.path}`
    : "https://heyitsjoealongi.com/",
  ogUrl: page?.path
    ? `https://heyitsjoealongi.com${page?.path}`
    : "https://heyitsjoealongi.com/",
  type: "website",
  ogType: "website",
  robots: "",
  ogImage: "https://heyitsjoealongi.com/heyitsjoealongi-banner.png",
});
</script>

<style></style>
