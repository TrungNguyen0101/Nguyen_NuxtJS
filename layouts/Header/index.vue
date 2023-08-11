<template>
  <header class="mb-[18px]">
    <HeaderIcon />
    <div
      class="md:flex hidden pt-[35px] px-[15px] justify-between gap-x-[50px]"
    >
      <div
        class="text-right flex flex-row items-center gap-x-[10px] text-[12px] basis-[30%]"
      >
        <div class="flex-1">
          <h2 class="text-end font-extrabold text-[16px]">John Doe</h2>
          <span class="overflow-wrap-break-word break-word text-[#999999]"
            >If you want to make your dreams come true, the first thing you have
            to do is wake up</span
          >
        </div>
        <img
          src="/avt.jpg"
          alt=""
          class="rounded-full w-[60px] h-[60px] object-cover"
        />
      </div>
      <div class="whitespace-nowrap text-center basis-[40%]">
        <h1 class="font-extrabold">VISUALNEWS PRO</h1>
        <span class="text-red-500">WP NEWSPAPER THEME</span>
      </div>
      <div
        class="text-left flex flex-row items-center gap-x-[10px] text-[12px] basis-[30%]"
      >
        <img
          src="/avt.jpg"
          alt=""
          class="rounded-full w-[60px] h-[60px] object-cover"
        />
        <div class="flex-1">
          <h2 class="font-extrabold text-[16px]">Mary Taylor</h2>
          <span class="overflow-wrap-break-word break-word text-[#999999]"
            >You can have anything you want if you are willing to give up
            everything you have</span
          >
        </div>
      </div>
    </div>
    <div class="mt-[20px] md:hidden block">
      <div class="whitespace-nowrap text-center basis-[40%]">
        <h1 class="font-extrabold">VISUALNEWS PRO</h1>
        <span class="text-red-500">WP NEWSPAPER THEME</span>
      </div>
    </div>
    <div class="md:pt-[30px] px-[11px] flex justify-between items-center">
      <div ref="dropdownRef" class="relative lg:hidden block">
        <button @click="onMenu">
          <BarsIcon />
        </button>
        <ul
          class="translate-x-[-200px] duration-300 lg:hidden flex fixed top-0 left-0 p-[20px] h-full bg-white shadow flex-col md:gap-y-[20px] gap-y-[10px] text-black text-[13px] font-bold"
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
          <li class="hover:text-blue-600">
            <NuxtLink to="#">HOME</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">ADVERTISING</NuxtLink>
          </li>
          <li class="relative fullWidthPage hover:text-blue-600">
            <div class="flex gap-x-[2px] items-center">
              <NuxtLink to="#"> BLOGGING</NuxtLink>
              <ArrowBottom colorprops="black" />
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
          <li class="hover:text-blue-600">
            <NuxtLink to="#">BUSINESS</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">FASHION</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">FOOD</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">LIFESTYLE</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">MARKETING</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">SEO</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">SOCIAL MEDIA</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">TECH </NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">TRAVEL</NuxtLink>
          </li>
          <li class="hover:text-blue-600">
            <NuxtLink to="#">WEB DESIGN</NuxtLink>
          </li>
        </ul>
      </div>
      <ul
        class="lg:flex hidden flex-wrap gap-x-[20px] text-black text-[13px] font-bold"
      >
        <li class="hover:text-blue-600">
          <NuxtLink to="#">HOME</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">ADVERTISING</NuxtLink>
        </li>
        <li class="relative fullWidthPage hover:text-blue-600">
          <div class="flex gap-x-[2px] items-center">
            <NuxtLink to="#"> BLOGGING</NuxtLink>
            <ArrowBottom colorprops="black" />
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
        <li class="hover:text-blue-600">
          <NuxtLink to="#">BUSINESS</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">FASHION</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">FOOD</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">LIFESTYLE</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">MARKETING</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">SEO</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">SOCIAL MEDIA</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">TECH </NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">TRAVEL</NuxtLink>
        </li>
        <li class="hover:text-blue-600">
          <NuxtLink to="#">WEB DESIGN</NuxtLink>
        </li>
      </ul>

      <SearchIcon />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ArrowBottom from "../../components/svgs/ArrowBottom.vue";
import SearchIcon from "../../components/svgs/SearchIcon.vue";
import BarsIcon from "../../components/svgs/BarsIcon.vue";
import Multiply from "../../components/svgs/Multiply.vue";
import HeaderIcon from "./HeaderIcon.vue";

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

// onBeforeUnmount(() => {
//   document.removeEventListener("click", handleClickOutside);
// });
</script>

<style lang="scss" scoped></style>
