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
</script>

<style></style>
