/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                app: '#06080e',
                surface: '#0c1118',
                card: '#101828',
                default: '#1a2a3a', // for borders
                primary: "#06e076",
                "primary-dark": "#04a858",
                muted: '#4a5f7a', // text
                "background-light": "#f5f8f7",
                "background-dark": "#0f2319",
                "card-dark": "#183527",
                "card-hover": "#214a36",
                'accent-green': '#00e676',
                'accent-teal': '#2dd4bf',
                'accent-blue': '#06aee0',
                'accent-purple': '#a78bfa',
                'accent-orange': '#ff6b2b',
                'accent-red': '#e04e06',
                'accent-yellow': '#e0c006',
            },
            fontFamily: {
                display: ['Plus Jakarta Sans', 'sans-serif'],
                body: ['Calibri', 'system-ui', 'sans-serif'],
                mono: ['Courier New', 'monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries')
    ],
};