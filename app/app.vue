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

// Nuxt SEO
useSeoMeta({
  titleTemplate: "%s",
  title: "heyitsjoealongi",
  ogTitle: "heyitsjoealongi",
  siteName: "heyitsjoealongi",
  ogSiteName: "heyitsjoealongi",
  description:
    "Advising on resilience, engineering security, and shaping what’s next.",
  ogDescription:
    "Advising on resilience, engineering security, and shaping what’s next.",
  url: "https://heyitsjoealongi.com/",
  ogUrl: "https://heyitsjoealongi.com/",
  type: "website",
  ogType: "website",
  robots: "",
  ogImage: "https://heyitsjoealongi.com/heyitsjoealongi-banner.png",
});
</script>
