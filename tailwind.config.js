// // tailwind.config.js
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         xs: "640px", // ✅ defines extra small screen
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "640px", // or 30rem
        // '3xl': "1200px" // or 120rem
      },
    },
  },
};
