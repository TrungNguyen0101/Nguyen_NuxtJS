<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
    >
      <path
        :fill="fillColor"
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  colorprops: {
    type: String,
    default: "white",
  },
});
const fillColor = computed(() =>
  props.colorprops === "black" ? "black" : "white",
);
</script>
