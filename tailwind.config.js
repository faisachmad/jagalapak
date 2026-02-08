export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                brand: {
                    blue: '#0f172a', // Slate 900
                    primary: '#2563eb', // Blue 600
                    accent: '#f59e0b', // Amber 500
                    light: '#f8fafc', // Slate 50
                }
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out',
            }
        },
    },
    plugins: [],
}
