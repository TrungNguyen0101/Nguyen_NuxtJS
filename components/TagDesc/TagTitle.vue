<template>
  <div class="flex gap-x-[30px]">
    <NuxtLink to="#">
      <h2 class="font-semibold pb-[12px] hover:text-blue-500 cursor-pointer">
        {{ props.title }}
      </h2>
    </NuxtLink>
    <div class="flex gap-x-[20px]">
      <NuxtLink to="#">
        <h2 class="text-[12px] font-bold text-[#a3a9b4] hover:text-black">
          SUB CAT 1
        </h2>
      </NuxtLink>
      <NuxtLink to="#">
        <h2 class="text-[12px] font-bold text-[#a3a9b4] hover:text-black">
          SUB CAT 2
        </h2>
      </NuxtLink>
      <NuxtLink to="#">
        <h2 class="text-[12px] font-bold text-[#a3a9b4] hover:text-black">
          SUB CAT 3
        </h2>
      </NuxtLink>
      <NuxtLink to="#">
        <h2 class="text-[12px] font-bold text-[#a3a9b4] hover:text-black">
          SUB CAT 4
        </h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "TRAVEL",
  },
});
</script>
<style lang="scss" scoped></style>
