<template>
  <div class="mb-[40px]">
    <TagDesc />
    <div class="grid grid-cols-2">
      <div
        class="flex gap-x-[5px] mt-[20px] items-center cursor-pointer hover:scale-110"
      >
        <TwitterIcon colorprops="color" size="25px" />
        <span class="text-[#1da1f2] text-[15px]">Twitter</span>
      </div>
      <div
        class="flex gap-x-[5px] mt-[20px] items-center cursor-pointer hover:scale-110"
      >
        <FacebookIcon colorprops="color" size="25px" />
        <span class="text-[#1778f2] text-[15px]">Facebook</span>
      </div>
      <div
        class="flex gap-x-[5px] mt-[20px] items-center cursor-pointer hover:scale-110"
      >
        <YoutubeIcon colorprops="color" size="25px" />
        <span class="text-[#ff0000] text-[15px]">Youtobe</span>
      </div>
      <div
        class="flex gap-x-[5px] mt-[20px] items-center cursor-pointer hover:scale-110"
      >
        <LinkedinIcon colorprops="color" size="25px" />
        <span class="text-[#0d66c2] text-[15px]">LinkedIn</span>
      </div>
      <div
        class="flex gap-x-[5px] mt-[20px] items-center cursor-pointer hover:scale-110"
      >
        <InstagramIcon colorprops="color" size="25px" />
        <span class="text-[#f00075] text-[15px]">Instagram</span>
      </div>
      <div
        class="flex gap-x-[5px] mt-[20px] items-center cursor-pointer hover:scale-110"
      >
        <DribbbleIcon colorprops="color" size="25px" />
        <span class="text-[#f00075] text-[15px]">Dribbble</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import TagDesc from "../TagDesc";
import DribbbleIcon from "../svgs/DribbbleIcon.vue";
import FacebookIcon from "../svgs/FacebookIcon.vue";
import TwitterIcon from "../svgs/TwitterIcon.vue";
import YoutubeIcon from "../svgs/YoutubeIcon.vue";
import LinkedinIcon from "../svgs/LinkedinIcon.vue";
import InstagramIcon from "../svgs/InstagramIcon.vue";
</script>

<style lang="scss" scoped></style>
