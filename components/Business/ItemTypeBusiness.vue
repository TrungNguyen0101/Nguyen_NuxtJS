<template>
  <NuxtLink to="#">
    <div class="flex flex-col gap-x-[15px] mt-[30px]">
      <img
        :src="props.image"
        alt=""
        class="object-cover w-full max-h-[190px]"
      />
      <div class="p-[20px] bg-[#f9f9f9]">
        <h3 class="text-[#a3a9b4] mb-[10px] hover:text-black text-[12px]">
          {{ props.title }}
        </h3>
        <span class="hover:text-blue-500 text-[18px] font-bold">{{
          props.desc
        }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "BUSINESS",
  },
  image: {
    type: String,
    default: "/business1.jpg",
  },
  desc: {
    type: String,
    default: "The job market enters a new phase as the Great Resignation ends",
  },
});
</script>

<style lang="scss" scoped></style>
