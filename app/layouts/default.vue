<template>
  <UContainer class="p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0">
    <div class="heyitsjoealongi-theme-container z-0 max-w-6xl m-9 xl:mx-auto">
      <div
        class="heyitsjoealongi-theme-column flex flex-col flex-auto min-w-0 mt-3 px-3 md:px-0"
      >
        <nav
          className="relative hidden invisible mb-0 md:block md:visible md:mb-[9vh]"
        >
          <ul
            className="flex flex-row items-center self-center mx-auto space-x-3"
          >
            <li className="flex flex-col justify-self-start mr-9">
              <a
                class="transition-all"
                rel="noopener noreferrer"
                target="_self"
                href="/"
              >
                <Logo
                  class="heyitsjoealongi-theme-logo h-9 w-9 max-h-9 max-w-9 md:h-18 md:w-18 md:max-h-18 md:max-w-18 my-3"
                  :font-controlled="false"
                />
              </a>
            </li>
          </ul>
        </nav>
        <nav
          className="z-30 relative block visible mb-[9vh] md:hidden md:invisible md:mb-0"
        >
          <ul className="flex flex-row justify-center items-center self-center">
            <li className="flex flex-col flex-auto justify-self-start">
              <a rel="noopener noreferrer" target="_self" href="/">
                <Logo
                  class="heyitsjoealongi-theme-logo h-9 w-9 max-h-9 max-w-9 md:h-18 md:w-18 md:max-h-18 md:max-w-18 my-3"
                  :font-controlled="false"
                />
              </a>
            </li>
          </ul>
        </nav>
        <slot />
        <section>
          <ul
            class="heyitsjoealongi-theme-social flex flex-col md:flex-row flex-auto my-3 text-base antialiased font-black text-left text-blue-600"
          >
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-300 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://blog.heyitsjoealongi.com/"
              >
                blog
              </a>
            </li>
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
        </section>
        <footer
          class="relative block mt-[9vh] text-xs subpixel-antialiased font-light text-left uppercase"
        >
          <p
            className="heyitsjoealongi-theme-copyright my-3 text-xs subpixel-antialiased font-light text-left uppercase text-neutral-100"
          >
            © {{ year }} heyitsjoealongi. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import Logo from "~/assets/heyitsjoealongi.svg";
const year = new Date().getFullYear();
</script>

<style></style>
