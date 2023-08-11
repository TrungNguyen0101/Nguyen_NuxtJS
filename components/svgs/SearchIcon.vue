<template>
  <div class="relative">
    <button class="cursor-pointer icon-hover" @click="onSearch">
      <svg
        v-if="!isSearch"
        xmlns="http://www.w3.org/2000/svg"
        width="16px"
        height="16px"
        viewBox="0 0 19 19"
        class="cursor-pointer icon-hover"
      >
        <path
          fill="black"
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
        />
      </svg>
      <svg
        v-if="isSearch"
        xmlns="http://www.w3.org/2000/svg"
        width="16px"
        height="16px"
        viewBox="0 0 36 36"
        class="cursor-pointer icon-hover"
      >
        <path
          fill="black"
          d="m22.238 18.004l9.883-9.883a3 3 0 1 0-4.242-4.243l-9.883 9.883l-9.883-9.882A3 3 0 1 0 3.87 8.122l9.883 9.882l-9.907 9.907a3 3 0 0 0 4.243 4.242l9.906-9.906l9.882 9.882c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242l-9.881-9.883z"
        />
      </svg>
    </button>
    <div
      v-if="isSearch"
      class="absolute bottom-[-60%] translate-y-[100%] right-0 w-[300px] shadow px-[15px] py-[18px] bg-white z-50 flex items-stretch"
    >
      <input
        type="text"
        class="bg-[#f5f5f5] outline-none px-[10px] py-[5px] rounded-l-[5px] max-w-[180px] h-[36px]"
      />
      <button
        class="bg-[#0099e5] px-[10px] w-full text-white font-semibold text-[15px] cursor-pointer"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isSearch = ref(false);
const onSearch = () => {
  isSearch.value = !isSearch.value;
};
</script>
