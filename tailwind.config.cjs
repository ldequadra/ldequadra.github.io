/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      'brand': "'Open Sans', sans-serif"
    },

    fontSize: {
      // text-SOMETHING: [font size, line heignt]
      D: ['48px', { fontWeight: '700', lineHeight: '72px' }], /* Display */

      // H1: ['48px', { fontWeight: '600', lineHeight: '64px' }], /* Heading 1 */
      H1: ['40px', { fontWeight: '600', lineHeight: '48px' }], /* Heading 1 */
      H2: ['32px', { fontWeight: '600', lineHeight: '40px' }], /* Heading 2 */
      H3: ['24px', { fontWeight: '600', lineHeight: '32px' }], /* Heading 3 */
      H4: ['20px', { fontWeight: '500', lineHeight: '24px' }], /* Heading 4 */
      H5: ['14px', { fontWeight: '600', lineHeight: '20px', letterSpacing: '0.5px' }], /* Heading 5 */
      H6: ['12px', { fontWeight: '600', lineHeight: '24px', letterSpacing: '0.5px' }], /* Heading 5 */

      BUTTON: ['14px', { fontWeight: '600', lineHeight: '24px', letterSpacing: '0.5px' }], /* Button */

      P1: ['16px', { fontWeight: '400', lineHeight: '24px' }], /* Paragraph 1 */
      P2: ['14px', { fontWeight: '400', lineHeight: '20px' }], /* Paragraph 2 */

    },

    colors: {
      // Brand Colors
      'C500': '#00CACA',
      'C300': '#00E2FF',
      'C100': '#4CEBFF',

      'O500': '#E55C00',
      'O300': '#FF6600',
      'O100': '#FF8533',

      // Neutrals
      'N500': '#111A20',
      'N400': '#1C2B35',
      'N300': '#2D3E4A',
      'N200': '#818181',
      'N100': '#F2F2F2',

      // Mono
      'BLACK': '#000000',
      'WHITE': '#FFFFFF',

    },
  },
  plugins: [],
}
