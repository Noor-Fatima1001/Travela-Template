/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B0082",     // main brand color
        secondary: "#1c0333",   // dark tone
        tertiary: "#d1b3d7",    
      },
      spacing: {
        'btn-md-x': '1rem',      // px-4
        'btn-md-y': '0.5rem',    // py-2
        'btn-lg-x': '1.25rem',   // px-5
        'btn-lg-y': '0.75rem',   // py-3
        'space-sm': '0.5rem',    // mb-2
        'space-md': '1.25rem',    // mb-4
        'space-lg': '1.5rem',      // mb-6
      },  
      borderRadius: {
        pill: '9999px',  // for pill-shaped buttons
        card: '16px',    // for card corners
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        large: '3rem',     // For headings (h1)
        regular: '1.5rem',  // For page names
        small: '1rem',   // For paragraphs
      },
     
    },
  },
  plugins: [],
};
