<template>
  <div>
    <div class="flex md:gap-x-[30px] gap-x-[10px]">
      <NuxtLink to="#">
        <h2 class="font-semibold pb-[12px] hover:text-blue-500 cursor-pointer">
          {{ props.title }}
        </h2>
      </NuxtLink>
      <div class="flex flex-wrap gap-x-[20px]">
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
    <div class="tagBorder border border-[#f4f4f4] relative -z-50" />
    <div class="grid sm:grid-cols-3 grid-cols-1 gap-x-[25px]">
      <div v-for="(section, index) in sections" :key="index">
        <ItemBusiness
          :title="props.title"
          :desc="section.desc"
          :image="section.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ItemBusiness from "./ItemBusiness";
const props = defineProps({
  title: {
    type: String,
    default: "BUSINESS",
  },
  sections: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
