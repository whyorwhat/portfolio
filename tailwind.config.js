/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            zIndex: { 60: '60', 70: '70', 80: '80', 90: '90', 100: '100' },
            fontFamily: {
                sans: ['Ubuntu', 'sans-serif'],
                replyia: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
                'replyia-ui': ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}
