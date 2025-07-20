<template>
  <UContainer class="p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0">
    <div
      class="heyitsjoealongi-theme-container z-0 flex flex-col flex-auto justify-center items-center h-full w-auto max-w-6xl my-[3vh] mx-3 xl:mx-auto"
    >
      <div
        class="heyitsjoealongi-theme-column flex flex-col flex-auto justify-self-start h-auto min-w-0 m-3 p-3"
      >
        <nav className="heyitsjoealongi-theme-navbar relative my-[3vh]">
          <ul
            className="flex flex-row justify-items-center content-center items-center space-x-3 mx-auto"
          >
            <li className="justify-self-start mr-auto">
              <a
                class="transition-all"
                rel="noopener noreferrer"
                target="_self"
                href="/"
              >
                <Back
                  class="heyitsjoealongi-theme-logo h-9 w-9 max-h-9 max-w-9 md:h-18 md:w-18 md:max-h-18 md:max-w-18 my-3"
                  :font-controlled="false"
                />
              </a>
            </li>
            <li class="flex justify-self-center">
              <a
                className="p-3 text-xl text-blue-600 hover:text-blue-300 text-center subpixel-antialiased transition-all cursor-pointer"
                rel="noopener noreferrer"
                target="_self"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="flex justify-self-center">
              <a
                className="p-3 text-xl text-blue-600 hover:text-blue-300 text-center subpixel-antialiased transition-all cursor-pointer"
                rel="noopener noreferrer"
                target="_self"
                href="/blog"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <slot />
        <footer>
          <ul
            class="heyitsjoealongi-theme-social flex flex-col md:flex-row flex-auto my-3 font-black text-blue-600 text-left subpixel-antialiased"
          >
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-300 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://x.com/heyitsjoealongi/"
              >
                x
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-300 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/heyitsjoealongi/"
              >
                github
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-300 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/heyitsjoealongi/"
              >
                instagram
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-300 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/heyitsjoealongi/"
              >
                linkedin
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-300 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/@heyitsjoealongi/"
              >
                youtube
              </a>
            </li>
          </ul>
        </footer>
        <p
          className="heyitsjoealongi-theme-copyright flex flex-col md:flex-row flex-auto my-[3vh] text-xs font-light text-neutral-300 hover:text-neutral-100 text-left uppercase subpixel-antialiased transition-all"
        >
          © {{ year }} heyitsjoealongi. All rights reserved.
        </p>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import Back from "~/assets/heyitsjoealongi-back.svg";
const year = new Date().getFullYear();
</script>

<style></style>
