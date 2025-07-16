<template>
  <div>
    <UContainer
      class="heyitsjoealongi-theme-error p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0"
    >
      <h2>{{ error?.statusCode }}</h2>
      <button @click="handleError">Clear errors</button>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style></style>
