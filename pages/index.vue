<template>
  <UContainer>
    <div
      class="heyitsjoealongi-theme-container flex flex-col flex-auto justify-center items-center h-full w-auto max-w-3xl mt-[3vh] lg:mt-[9vh] mx-3 md:mx-9 xl:mx-auto"
    >
      <div
        class="heyitsjoealongi-theme-column flex flex-col flex-auto justify-self-center"
      >
        <Logo
          class="heyitsjoealongi-theme-logo w-9 h-9 md:w-18 md:h-18 lg:w-30 lg:h-30 my-3"
          :font-controlled="false"
        />
        <h1
          class="heyitsjoealongi-theme-heading-one my-3 text-3xl md:text-6xl subpixel-antialiased font-light text-left"
        >
          heyitsjoealongi
        </h1>
        <h3
          className="heyitsjoealongi-theme-heading-three my-3 lg:my-6 text-xl lg:text-3xl subpixel-antialiased font-light text-left"
        >
          Advising on resilience, engineering security, and shaping what’s next.
        </h3>
        <p
          className="heyitsjoealongi-theme-paragraph my-3 text-base subpixel-antialiased font-light text-left"
        >
          Developing modern applications from code to cloud in JavaScript,
          TypeScript, Java, C#/.NET, Python, SQL, and NoSQL. Building
          cloud-native and on-prem systems with containers and machine learning.
          Streamlining delivery with agile development, hybrid transformation,
          and effective development operation processes. Enhancing applications
          with modern code and intelligent systems—ready for today, built for
          tomorrow.
        </p>
        <footer>
          <ul
            class="heyitsjoealongi-theme-footer flex flex-col md:flex-row flex-auto my-3"
          >
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 text-base antialiased font-black text-left transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://blog.heyitsjoealongi.com/"
              >
                blog
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 text-base antialiased font-black text-left transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://x.com/heyitsjoealongi/"
              >
                x
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 text-base antialiased font-black text-left transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/heyitsjoealongi/"
              >
                github
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 text-base antialiased font-black text-left transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/heyitsjoealongi/"
              >
                instagram
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 text-base antialiased font-black text-left transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/heyitsjoealongi/"
              >
                linkedin
              </a>
            </li>
            <li class="flex items-center">
              <a
                class="mb-3 md:mb-0 md:mr-6 text-base antialiased font-black text-left transition-all"
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
          className="heyitsjoealongi-theme-copyright my-3 text-xs subpixel-antialiased font-light text-left"
        >
          © {{ year }} heyitsjoealongi. All rights reserved.
        </p>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
import Logo from "~/assets/heyitsjoealongi.svg";
const year = new Date().getFullYear();
</script>

<style></style>
