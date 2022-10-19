/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            primary: 'var(--primary)',
            white: 'var(--white)',
            black: 'var(--black)',
            gray: {
                100: 'var(--black--100)',
                200: 'var(--black--200)',
            }
        }
    },
    plugins: [],
}
