<template>
  <UContainer class="p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0">
    <div class="heyitsjoealongi-theme-container z-0 max-w-6xl m-9 xl:mx-auto">
      <div
        class="heyitsjoealongi-theme-column flex flex-col flex-auto min-w-0 mt-3 px-3 md:px-0"
      >
        <nav className="mb-0 md:mb-[9vh]">
          <Logo
            class="heyitsjoealongi-theme-logo w-9 h-9 md:w-18 md:h-18 my-3"
            :font-controlled="false"
          />
        </nav>
        <h1
          class="heyitsjoealongi-theme-heading-one text-3xl md:text-6xl font-bold subpixel-antialiased text-blue-600"
        >
          heyitsjoealongi
        </h1>
        <h3
          className="heyitsjoealongi-theme-introduction my-3 md:my-9 text-xl md:text-3xl text-base subpixel-antialiased text-neutral-100"
        >
          Advising on resilience, engineering security, and shaping what’s next.
        </h3>
        <p
          className="heyitsjoealongi-theme-paragraph mt-0 mb-3 md:mb-9 text-xl font-thin subpixel-antialiased text-blue-600"
        >
          Developing modern applications from code to cloud in JavaScript,
          TypeScript, Java, C#/.NET, Python, SQL, and NoSQL. Building
          cloud-native and on-prem systems with containers and machine learning.
          Streamlining delivery with agile development, hybrid transformation,
          and effective development operation processes. Enhancing applications
          with modern code and intelligent systems—ready for today, built for
          tomorrow.
        </p>
        <section>
          <ul
            class="heyitsjoealongi-theme-social flex flex-col md:flex-row flex-auto my-3 text-base antialiased font-black text-left text-neutral-100"
          >
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-600 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://blog.heyitsjoealongi.com/"
              >
                blog
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-600 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://x.com/heyitsjoealongi/"
              >
                x
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-600 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/heyitsjoealongi/"
              >
                github
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-600 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/heyitsjoealongi/"
              >
                instagram
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-600 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/heyitsjoealongi/"
              >
                linkedin
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 hover:text-blue-600 transition-all"
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
