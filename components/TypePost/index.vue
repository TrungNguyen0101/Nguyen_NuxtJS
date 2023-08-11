<template>
  <NuxtLink to="#">
    <div
      class="flex gap-x-[15px] pb-[15px] mb-[15px]"
      :class="{
        'border-b': props.border === true,
        'flex-col': props.cssType === true,
      }"
    >
      <img
        :src="image"
        alt=""
        class="object-cover"
        :class="{
          'max-w-[150px] max-h-[100px]': props.sizeImage === false,
          'w-full md:max-h-[120px] sm:max-h-[220px] mb-[10px]':
            props.sizeImage === true,
        }"
      />
      <div>
        <h3 class="text-[#a3a9b4] mb-[10px] hover:text-black text-[13px]">
          {{ props.type }}
        </h3>
        <span
          class="hover:text-blue-500 text-[15px] font-bold"
          :class="{ 'text-desc': props.cssDesc === true }"
        >
          {{ props.desc }}</span
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  image: {
    type: String,
    default: "/fashion1.jpg",
  },
  type: {
    type: String,
    default: "Fashion",
  },
  desc: {
    type: String,
    default:
      "The best smart glasses to buy now, according to experts asdasdasda",
  },
  border: {
    type: Boolean,
    default: true,
  },
  cssType: {
    type: Boolean,
    default: false,
  },
  sizeImage: {
    type: Boolean,
    default: false,
  },
  cssDesc: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>
