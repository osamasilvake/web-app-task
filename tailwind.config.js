/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "custom-one": "1280px", // You can change this to any value
      },
    },
  },
  plugins: [],
};
