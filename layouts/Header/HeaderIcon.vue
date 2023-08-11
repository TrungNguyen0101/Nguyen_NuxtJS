<template>
  <header>
    <div class="header-icon p-[11px] flex justify-between">
      <div ref="dropdownRef" class="relative md:hidden block">
        <button @click="onMenu">
          <BarsIcon />
        </button>
        <ul
          class="translate-x-[-200px] duration-300 lg:hidden flex fixed top-0 left-0 p-[20px] h-full bg-white shadow flex-col gap-y-[20px] text-black text-[13px] font-bold z-40"
          :class="{
            'translate-x-[-200px]': open === false,
            'translate-x-[0]': open === true,
          }"
        >
          <button
            class="absolute top-[5px] right-[5px] cursor-pointer"
            @click="offMenu"
          >
            <Multiply />
          </button>
          <li>
            <NuxtLink to="#">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Contact</NuxtLink>
          </li>
          <li class="relative fullWidthPage">
            <div class="flex gap-x-[2px] items-center">
              <NuxtLink to="#">Full Width Page</NuxtLink>
              <ArrowBottom colorprops="white" />
            </div>
            <div class="fullWidthPage-hover">
              <div
                class="absolute bottom-[-50%] translate-y-[50%] translate-x-[50%] left-[0%] text-black w-[200%] bg-white shadow p-[8px] flex flex-col gap-y-[10px]"
              >
                <span class="border-b pb-[10px]">
                  <NuxtLink to="#">Sub menu 1</NuxtLink>
                </span>
                <span class="border-b pb-[10px]">
                  <NuxtLink to="#">Sub menu 2</NuxtLink>
                </span>
                <span class="">
                  <NuxtLink to="#">Sub menu 3</NuxtLink>
                </span>
              </div>
            </div>
          </li>
          <li>
            <NuxtLink to="#">Submit Article</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Buy Theme</NuxtLink>
          </li>
        </ul>
      </div>
      <ul class="md:flex hidden gap-x-[18px] text-white text-[12px]">
        <li>
          <NuxtLink to="#">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Contact</NuxtLink>
        </li>
        <li class="relative fullWidthPage">
          <div class="flex gap-x-[2px] items-center">
            <NuxtLink to="#">Full Width Page</NuxtLink>
            <ArrowBottom colorprops="white" />
          </div>
          <div class="fullWidthPage-hover">
            <div
              class="absolute bottom-[-60%] translate-y-[100%] left-0 text-black w-[200%] bg-white shadow p-[8px] flex flex-col gap-y-[10px]"
            >
              <span class="border-b pb-[10px]">
                <NuxtLink to="#">Sub menu 1</NuxtLink>
              </span>
              <span class="border-b pb-[10px]">
                <NuxtLink to="#">Sub menu 2</NuxtLink>
              </span>
              <span class="">
                <NuxtLink to="#">Sub menu 3</NuxtLink>
              </span>
            </div>
          </div>
        </li>
        <li>
          <NuxtLink to="#">Submit Article</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Buy Theme</NuxtLink>
        </li>
      </ul>
      <div class="flex gap-x-[12px]">
        <DribbbleIcon />
        <FacebookIcon />
        <InstagramIcon />
        <LinkedinIcon />
        <TwitterIcon />
        <YoutubeIcon />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Multiply from "../../components/svgs/Multiply.vue";
import ArrowBottom from "../../components/svgs/ArrowBottom.vue";
import DribbbleIcon from "../../components/svgs/DribbbleIcon.vue";
import FacebookIcon from "../../components/svgs/FacebookIcon.vue";
import BarsIcon from "../../components/svgs/BarsIcon.vue";
import InstagramIcon from "../../components/svgs/InstagramIcon.vue";
import LinkedinIcon from "../../components/svgs/LinkedinIcon.vue";
import TwitterIcon from "../../components/svgs/TwitterIcon.vue";
import YoutubeIcon from "../../components/svgs/YoutubeIcon.vue";

const dropdownRef = ref(null);
const open = ref(false);

const onMenu = () => {
  open.value = true;
};
const offMenu = () => {
  open.value = false;
};
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
</script>

<style lang="scss" scoped></style>
