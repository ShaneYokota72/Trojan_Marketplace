import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cardinal: '#922234',
        gold: '#f6c03c'
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#1d232a",
                   
          "secondary": "#FFFFFF",
                   
          "accent": "#990000",
                   
          "neutral": "#2a323c",
                   
          "base-100": "#f3f4f6",
                   
          "info": "#00b5ff",
                   
          "success": "#00d389",
                   
          "warning": "#ffbe00",
                   
          "error": "#ff5861",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
