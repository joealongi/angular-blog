<template>
  <UContainer class="p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0">
    <ContentRenderer v-if="page" :value="page" class="mb-9 blog" />
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

<style>
.blog h1 {
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: 700;
  color: #2563eb;

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
  }
}
.blog h2 {
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
.blog h3,
h4,
h5,
h6 {
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: 100;
  color: #2563eb;

  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
.blog p,
.blog li {
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
  font-size: 1rem;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-weight: 100;
  color: #d4d4d4;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
}
.blog h2 > a {
  color: #93c5fd;
}
.blog a {
  color: #2563eb;
}
.blog a:hover {
  color: #93c5fd;
}
.blog code {
  color: #93c5fd;
}
.blog img {
  width: 100vw;
}
</style>
