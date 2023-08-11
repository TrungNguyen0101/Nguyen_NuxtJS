<template>
  <div class="mt-[30px]">
    <TagDesc desc="MARKETING" />
    <div>
      <img
        :src="props.image"
        alt=""
        class="mb-[10px] w-full md:max-h-[210px] max-h-[448px] object-cover mt-[20px]"
      />
      <span class="hover:text-blue-500 text-[17px] font-bold">{{
        props.desc
      }}</span>
      <ul class="mt-[15px] text-[17px]">
        <li class="pt-[15px] border-t mb-[15px]">
          SEO Copywriting: How to Write Content For People and Optimize For
          Google
        </li>
        <li class="pt-[15px] border-t mb-[15px]">
          9 Ways to Engage Your Customers With Instagram Highlights
        </li>
        <li class="pt-[15px] border-t mb-[15px]">
          A Starter Guide to Google Ads Manager Accounts
        </li>
        <li class="pt-[15px] mb-[15px]">
          25 Marketing Books You Should Be Reading
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
