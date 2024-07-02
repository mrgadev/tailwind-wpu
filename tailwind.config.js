
/** @type {import('tailwindcss').Config} */
// Untuk memodifikasi style bawaan tailwind, kita bisa mengoprek file confignya
// di bagian theme dan extend
// kalau bagian theme, isinya berupa modifikasi dari warna, teks, jenis teks
// adapun untuk extends digunakan untuk memodifikasi sizing, speerti margin, padding, dan border radius
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: ['./public/**/*.{html,js}'],
  
  theme: {

    fontFamily: {
      jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      koran: ['Merriweather', 'serif']
    },

    extend: {
      animation: {
        'spin-slow':  'spin 5s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'}
        }
      },
      spacing: {
        13: '3.25rem'
      }
    },
  },
  plugins: [],
}

