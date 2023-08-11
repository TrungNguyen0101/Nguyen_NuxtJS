<template>
  <h2 v-if="props.desc === 'FOLLOW US'" class="font-semibold pb-[12px]">
    {{ props.desc }}
  </h2>
  <h2 v-else class="font-semibold pb-[12px] hover:text-blue-500 cursor-pointer">
    <NuxtLink to="#">{{ props.desc }}</NuxtLink>
  </h2>
  <div class="tagBorder border border-[#f4f4f4] relative -z-50" />
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  desc: {
    type: String,
    default: "FOLLOW US",
  },
});
</script>
