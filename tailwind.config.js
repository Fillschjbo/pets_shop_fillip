module.exports = {
    content: [
        "./index.html",
        "./auth/**/*.{html,js}",
        "./listing/**/*.{html,js}",
        "./src/**/*.{html,js}",
        "./build/*.html",
        "./build/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['"M PLUS 1p"', 'serif'],
                hero: ['"Lilita One"', 'serif'],
            },
        },
    },
    plugins: [],
};