/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    colors: {
      white:"#fff",
      gray_light: "#e1e1e1",
      gray:"#a5a5a5",
      gray_Dark:"#333333",
      black:"#000",
      orange:"#ff9604",
      orange_light:"#fdc66a"
    },
  },
  plugins: [],
}
