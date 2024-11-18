import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lblack':'#111313',
        'lgrey':'#1d2020',
        'lslate':'#585757',
        'lwhite':'#dcdcdc',
        'lgrey-2':'#4c5555',
        'lgrey-3':'#272b2b',
        'lgrey-4':'#444c4c',
        'lgrey-5':'#717979',
        'lsky' : '#97e4dc',
        'lsky-1':'#98e5dd',
        'lorange':'#eeb58f'
      },
    },
  },
  plugins: [],
};
export default config;