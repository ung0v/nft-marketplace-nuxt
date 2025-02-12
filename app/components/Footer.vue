<template>
  <footer class="relative w-full bg-gray-50 p-8 lg:p-20 dark:bg-surface-800">
    <div class="flex flex-wrap justify-center gap-20 lg:gap-56">
      <div class="flex flex-col text-center md:text-left">
        <div>
          <div class="mb-4 inline-flex items-center">
            <span class="ml-3 text-3xl font-bold">Solanart</span>
          </div>
          <p class="md:mb-12 md:max-w-[400px] md:text-justify dark:text-gray-400">
            The first marketplace on Solana to buy, trade and sell non-fungible tokens (NFTs). Chat on chain with
            buyers/sellers, launch a project with our launchpad or just explore.
          </p>
        </div>
        <div class="mx-auto mt-6 inline-flex flex-wrap items-center gap-5 md:mx-0">
          <div class="md:justify-left flex flex-wrap justify-center gap-4">
            <div
              class="relative inline-flex flex-col rounded-lg border bg-transparent text-black dark:border-transparent dark:bg-white"
            >
              <button class="flex items-center gap-5 p-3 pr-6">
                <div class="size-8 overflow-hidden rounded-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
                    alt="en"
                    class="size-full object-cover object-center"
                  >
                </div><span>English</span>
              </button>
            </div>
            <div class="flex gap-4">
              <a
                href="https://discord.com/invite/solanart"
                target="blank"
                rel="noopener noreferrer"
              ><Button
                variant="outlined"
                severity="contrast"
                icon="pi pi-discord"
                icon-class="!text-2xl"
                class="!size-14 h-full"
              /></a><a
                href="https://twitter.com/SolanartNFT"
                target="blank"
                rel="noopener noreferrer"
              ><Button
                variant="outlined"
                severity="contrast"
                icon="pi pi-twitter"
                icon-class="!text-2xl"
                class="!size-14 h-full"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-20 flex flex-1 flex-wrap gap-16 lg:gap-32">
        <div class="tracking-wide">
          <h3 class="mb-6 text-lg font-semibold">
            Explore
          </h3>
          <ul class="flex flex-col gap-3">
            <li>
              <a
                class="hover:underline"
                href="/collections"
              >All collections</a>
            </li>
          </ul>
        </div>
        <div class="tracking-wide">
          <h3 class="mb-6 text-lg font-semibold">
            Partners
          </h3>
          <ul class="flex flex-col gap-3">
            <li>
              <a
                class="hover:underline"
                href="mailto:team@solanart.io"
              >Contact us</a>
            </li>
            <li class="flex items-center gap-2">
              <a
                class="hover:underline"
                href="https://airtable.com/shrQL6dlS64u2FmId"
                target="_blank"
                rel="noopener noreferrer"
              >Careers</a><i class="pi pi-external-link !text-xs" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-10 opacity-30">
    <div class="flex flex-wrap justify-center gap-4 text-opacity-80 md:justify-between">
      <p class="dark:text-gray-400">
        All rights reserved<!-- --> 2021-2022 ©
      </p>
      <div class="flex flex-wrap justify-center gap-8 text-[#00FFA3]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2"
          href="/legal/terms-conditions.pdf"
        ><span>Terms &amp; Conditions</span>
          <i class="pi pi-external-link !text-xs" />
        </a><a
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2"
          href="/legal/privacy-policy.pdf"
        ><span>Privacy policy</span><i class="pi pi-external-link !text-xs" /></a><a
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2"
          href="/legal/cookie-policy.pdf"
        ><span>Cookie policy</span><i class="pi pi-external-link !text-xs" /></a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style></style>
