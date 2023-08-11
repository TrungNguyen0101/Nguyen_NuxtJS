module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    "@nuxtjs/eslint-config",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", // Kiểm tra và đóng các thẻ HTML void (không có nội dung) dưới dạng tự đóng (ví dụ: <br />)
          normal: "always", // Kiểm tra và đóng các thẻ HTML thông thường (có nội dung) dưới dạng tự đóng (ví dụ: <div />)
          component: "always", // Kiểm tra và đóng các thẻ Vue component dưới dạng tự đóng (ví dụ: <TasksPage />)
        },
        svg: "always", // Kiểm tra và đóng các thẻ SVG dưới dạng tự đóng (ví dụ: <svg />)
        math: "always", // Kiểm tra và đóng các thẻ MathML dưới dạng tự đóng (ví dụ: <math />)
      },
    ],
    "vue/no-setup-props-destructure": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "linebreak-style": "off",
  },
};
