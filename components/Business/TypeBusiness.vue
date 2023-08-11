<template>
  <div>
    <div class="flex gap-x-[30px]">
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
    <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-[25px]">
      <div v-for="(section, index) in sections" :key="index">
        <ItemTypeBusiness
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
import ItemTypeBusiness from "./ItemTypeBusiness.vue";
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
