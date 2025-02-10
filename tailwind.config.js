/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js 13 이상에서 app 디렉토리 경로도 추가
  ],
  theme: {
    extend: {
      colors: {
        "brand-green": "#53B175",
        // "brand-blue": "#1D4ED8", // 원하는 색을 추가
        // "brand-green": "#10B981", // 추가 색상 예시
      },
      backgroundColor: {
        "brand-blue": "#5383EC",
        "brand-green": "#53B175",
      },
    },
  },
  plugins: [],
};
