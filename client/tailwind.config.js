/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                app: '#06080e',
                surface: '#0c1118',
                card: '#101828',
                default: '#1a2a3a', // for borders
                primary: '#c8d5e8', // text
                muted: '#4a5f7a', // text
                'accent-green': '#00e676',
                'accent-teal': '#2dd4bf',
                'accent-blue': '#38bdf8',
                'accent-purple': '#a78bfa',
                'accent-orange': '#ff6b2b',
                'accent-red': '#ff3d5a',
                'accent-yellow': '#fbbf24',
            },
            fontFamily: {
                display: ['Georgia', 'serif'],
                body: ['Calibri', 'system-ui', 'sans-serif'],
                mono: ['Courier New', 'monospace'],
            },
        },
    },
    plugins: [],
}