/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
     
    

      container:{
        center:true,
        padding:"20px",

      },
      fontFamily:{
        Pattaya_Regular:['"Pattaya"',"sans-serif"]
      },
      backgroundImage:{
        "gradient":"linear-gradient(180deg, rgba(70, 255, 54, 0.22) 36.98%, rgba(255, 255, 255, 0.00) 100%)"
      }
    },
  },
  plugins: [],
}
