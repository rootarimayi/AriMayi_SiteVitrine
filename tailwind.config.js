/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Opensans: ["var(--font-open-sans)"],
      monserrat: ["var(--font-monserrat)"],
    },
    extend: {
      colors: {
        orange: "#F68A67",
        gray: "#353535",
      },
      backgroundImage: {
        Partnerlogo: 'url("/logo/partnerlogo.png")',
        Partnerarimayi: 'url("/logo/partnerarimayi.png")',
        HomepageBanner: 'url("/assets/banniere-acceuil.png")',
        HomepageBanne: 'url("/assets/bannerr.png")',
        HomepageBannerMobile: 'url("/assets/acceuilMobile.png")',
        apprenantsBanner:
          'url("/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg")',
        partenairesBanner: 'url("/assets/PHOTO-2024-12-22-20-02-27.jpg")',
        identiteBanne: 'url("/assets/jud-mackrill-Of_m3hMsoAA-unsplash.jpg")',
        identiteBanner: 'url("/assets/PHOTO-2024-12-22-20-04-03.jpg")',
        contacctBanner: 'url("/assets/contac.jpg")',
        formaBanner: 'url("/assets/appren.jpg")',
        conttBanner: 'url("/assets/nathan-anderson-FHiJWoBodrs-unsplash.jpg")',
        bgAri: 'url("/assets/bgAri.svg")',
        candidat:
          'url("/assets/christina-wocintechchat-com-OW5KP_Pj85Q-unsplash.jpg")',
        cybersecuriy: 'url("/assets/cyber.JPEG")',
        commercial: 'url("/assets/commercial.JPEG")',
        design: 'url("/assets/design.JPEG")',
        mobile: 'url("/assets/mobile.JPG")',
        ai: 'url("/assets/ai.JPG")',
        certif: 'url("/assets/BEDOUHENE.JPG")',

        conception: 'url("/assets/conception.JPG")',
      },
      screens: {
        lg: "1180px",
        sm: "700px",
      },
    },
  },
  plugins: [],
  variants: {
    backgroundImage: ["responsive"],
  },
};
