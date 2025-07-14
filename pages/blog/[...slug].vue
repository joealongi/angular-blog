<template>
  <UContainer class="p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0">
    <ContentRenderer v-if="page" :value="page" class="mb-9" />
  </UContainer>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (document) {
  const img = document?.querySelectorAll("img");
  if (img?.length > 0) {
    img?.forEach((element) => {
      element?.classList?.add("heyitsjoealongi-theme-image", "w-screen");
    });
  }
  const h1 = document?.querySelectorAll("h1");
  if (h1?.length > 0) {
    h1?.forEach((element) => {
      element?.classList?.add(
        "heyitsjoealongi-theme-heading-one",
        "my-9",
        "text-3xl",
        "md:text-6xl",
        "font-bold",
        "subpixel-antialiased",
        "text-blue-600"
      );
    });
  }
  const h2 = document?.querySelectorAll("h2");
  if (h2?.length > 0) {
    h2?.forEach((element) => {
      element?.classList?.add(
        "heyitsjoealongi-theme-heading-two",
        "my-9",
        "text-xl",
        "md:text-3xl",
        "text-base",
        "subpixel-antialiased",
        "text-neutral-100"
      );
    });
  }
  const h3 = document?.querySelectorAll("h3");
  if (h3?.length > 0) {
    h3?.forEach((element) => {
      element?.classList?.add(
        "heyitsjoealongi-theme-heading-three",
        "my-9",
        "text-xl",
        "md:text-3xl",
        "font-thin",
        "subpixel-antialiased",
        "text-blue-600"
      );
    });
  }
  const p = document?.querySelectorAll("p");
  if (p?.length > 0) {
    p?.forEach((element) => {
      element?.classList?.add(
        "heyitsjoealongi-theme-paragraph",
        "my-3",
        "font-thin",
        "font-thin",
        "subpixel-antialiased",
        "text-neutral-100"
      );
    });
  }
  // const a = document?.querySelectorAll("a");
  // if (a?.length > 0) {
  //   a?.forEach((element) => {
  //     element?.classList?.add("text-blue-600", "hover:text-neutral-300");
  //   });
  // }
}
</script>

<style></style>
