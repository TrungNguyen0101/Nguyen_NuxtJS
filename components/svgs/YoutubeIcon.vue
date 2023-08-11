<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="sizeComputed"
    :height="sizeComputed"
    viewBox="0 0 32 32"
  >
    <path
      :fill="fillColor"
      d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z"
    />
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  colorprops: {
    type: String,
    default: "white",
  },
  size: {
    type: String,
    default: "1em",
  },
});
const fillColor = computed(() =>
  props.colorprops === "color" ? "#ff0000" : "white",
);
const sizeComputed = computed(() => (props.size === "25px" ? "25px" : "1em"));
</script>
