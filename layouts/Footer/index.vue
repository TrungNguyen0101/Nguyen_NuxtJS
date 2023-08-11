<template>
  <div class="p-[35px] bg-black text-white">
    <div class="lg:flex lg:gap-x-[30px] mb-[50px] grid grid-cols-1">
      <div class="grow basis-0 lg:mb-0 mb-[20px]">
        <h2 class="font-bold mb-[20px]">ABOUT US</h2>
        <p class="text-[14px] leading-[23px]">
          A block theme is a WordPress theme with templates entirely composed of
          blocks. Therefore, in addition to the content of different post types
          (pages, posts, etc.), the block editor can also be used to edit all
          areas of the website
        </p>
        <div class="flex gap-x-[12px] mt-[32px]">
          <DribbbleIcon />
          <FacebookIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </div>
      </div>
      <div class="grow basis-0 lg:mb-0 mb-[20px]">
        <h2 class="font-bold mb-[20px]">CATEGORY NAME</h2>
        <div class="mb-[20px]">
          <ItemFooter
            image="/food1.jpg"
            desc="TikTok’s latest trending beauty filter returns users to their younger selves"
          />
        </div>
        <div class="mb-[20px]">
          <ItemFooter
            image="/business2.jpg"
            desc="The best smart glasses to buy now, according to experts"
          />
        </div>
        <div class="">
          <ItemFooter
            image="/business3.jpg"
            desc="The best wrinkle-free travel clothes to pack for your summer vacation"
          />
        </div>
      </div>
      <div class="grow basis-0 lg:mb-0 mb-[20px]">
        <h2 class="font-bold mb-[20px]">CATEGORY NAME</h2>
        <div class="mb-[20px]">
          <ItemFooter
            image="/food2.jpg"
            desc="Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You Think"
          />
        </div>
        <div class="mb-[20px]">
          <ItemFooter
            image="/technology2.jpg"
            desc="The 6 biggest iOS 17 features that Apple stole from Android Digital Trends"
          />
        </div>
        <div class="">
          <ItemFooter
            image="/technology3.jpg"
            desc="9 Ways to Engage Your Customers With Instagram Highlights"
          />
        </div>
      </div>
      <div class="grow basis-0 lg:mb-0 mb-[20px]">
        <h2 class="font-bold mb-[20px]">SUPPORT</h2>
        <ul class="flex flex-col gap-y-[16px]">
          <li class="hover:text-blue-500 cursor-pointer">
            Corporate Membership
          </li>
          <li class="hover:text-blue-500 cursor-pointer">Publish Your Book</li>
          <li class="hover:text-blue-500 cursor-pointer">Submit An Article</li>
          <li class="hover:text-blue-500 cursor-pointer">Advertise</li>
          <li class="hover:text-blue-500 cursor-pointer">Community Forum</li>
          <li class="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
        </ul>
      </div>
    </div>
    <ul
      class="text-center flex flex-wrap gap-x-[20px] m-auto justify-center text-[11px] font-medium mb-[25px]"
    >
      <li>
        <NuxtLink to="#"> <span>ABOUT</span></NuxtLink>
      </li>
      <li>
        <NuxtLink to="#"> <span>CONTACT</span></NuxtLink>
      </li>
      <li>
        <NuxtLink to="#"> <span>FULL WIDTH PAGE</span></NuxtLink>
      </li>
      <li>
        <NuxtLink to="#"> <span>SUBMIT ARTICLE</span></NuxtLink>
      </li>
      <li>
        <NuxtLink to="#"> <span>BUY THEME</span></NuxtLink>
      </li>
    </ul>
    <span class="text-center block m-auto text-[11px]">
      <NuxtLink to="#" class="hover:text-blue-500">WORDPRESS THEME </NuxtLink>
      BY <NuxtLink to="#" class="hover:text-blue-500">WPENJOY</NuxtLink>
    </span>
  </div>
</template>

<script setup>
import DribbbleIcon from "../../components/svgs/DribbbleIcon.vue";
import FacebookIcon from "../../components/svgs/FacebookIcon.vue";
import InstagramIcon from "../../components/svgs/InstagramIcon.vue";
import LinkedinIcon from "../../components/svgs/LinkedinIcon.vue";
import TwitterIcon from "../../components/svgs/TwitterIcon.vue";
import YoutubeIcon from "../../components/svgs/YoutubeIcon.vue";
import ItemFooter from "./ItemFooter";
</script>

<style lang="scss" scoped></style>
