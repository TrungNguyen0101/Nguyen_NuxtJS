<template>
  <div class="flex gap-x-[10px]">
    <img
      :src="props.image"
      alt=""
      class="object-cover max-w-[90px] max-h-[60px]"
    />
    <h3 class="text-[13px] font-semibold leading-[15.6px]">
      {{ props.desc }}
    </h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  image: {
    type: String,
    default: "/business1.jpg",
  },
  desc: {
    type: String,
    default:
      " TikTok’s latest trending beauty filter returns users to their younger selves",
  },
});
</script>

<style lang="scss" scoped></style>
