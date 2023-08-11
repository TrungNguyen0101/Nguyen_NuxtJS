// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
