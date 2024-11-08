/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'Opensans': ["var(--font-open-sans)"],
      'monserrat': ["var(--font-monserrat)"]
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'HomepageBanner': 'url("/assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg")',
        'apprenantsBanner': 'url("/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg")',
        'partenairesBanner': 'url("/assets/creatopy-b6Fo9loWZUk-unsplash.jpg")',
        'identiteBanner': 'url("/assets/jud-mackrill-Of_m3hMsoAA-unsplash.jpg")',
        'contactBanner': 'url("/assets/nathan-anderson-FHiJWoBodrs-unsplash.jpg")',
      }
    },
  },
  plugins: [],
};
