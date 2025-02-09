/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,ts,jsx,tsx,css}", // Adjust based on your project structure
];
export const theme = {
    extend: {
        maxWidth: {
          'screen-2xl': '1400px', 
          'custom-1200': '1200px', 
          'custom-900': '900px', 
        },
        colors: {
          'primary': '#ed3849',
          'primary-dark': "#d23141",
          'primary-light': '#f4e5ec',
          'text-dark': '#0f172a',
          'text-light': '#64748b',
          'extra-light': '#f8fafc'
        }
      },
};
export const plugins = [];
  