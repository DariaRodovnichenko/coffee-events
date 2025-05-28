export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5E8C61",
          dark: "#2E5939",
          light: "#EAF3EA",
          "light-green": "#EAF3EA",
        },
      },
      backgroundImage: {
        hero: 'image-set(url("/img/hero_1x.webp") 1x, url("/img/hero_2x.webp") 2x)',
      },
    },
  },
  plugins: [],
};
