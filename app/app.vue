<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
// Custom redirect
const redirect = () => {
  if (window?.location) {
    const domain = window?.location?.toString();
    if (
      !domain?.includes("localhost") &&
      !domain?.includes("heyitsjoealongi.com")
    ) {
      window.location.replace("https://heyitsjoealongi.com/");
    }
  }
};
redirect();
</script>
