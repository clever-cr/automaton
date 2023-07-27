/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": {
            " box-shadow":
              "0 0 0 0 rgba(0, 160, 177, 0.3), 0 0 0 1px rgba(0, 160, 177, 0.3), 0 0 0 3px rgba(0, 160, 177, 0.3), 0 0 0 5px rgba(0, 160, 177, 0.3)",
          },
          "100%": {
            "box-shadow":
              "0 0 0 0 rgba(0, 160, 177, 0.3),0 0 0 4px rgba(0, 160, 177, 0.3),0 0 0 20px rgba(0, 160, 177, 0),0 0 0 30px rgba(0, 160, 177, 0)",
          },
        },
      },
      animation: {
        ripple: "ripple 1.5s linear infinite",
      },
    },
    plugins: [],
  },
};
