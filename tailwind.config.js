module.exports = {
    content: [
        "./index.html",
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