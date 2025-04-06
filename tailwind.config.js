/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./**/*.{html,js,ts}","!./node_modules/**/*"],
    theme: {
        extend: {},
        height: {
            'header-sm': '85px',
            'header-lg': '104px',
            'card-sm' : '341px',
            'card-md' : '371px',
            'card-img-sm' : '211px',
            'card-img-md' : '234px',
        },
        // width: {
        //   '382' : '382px',
        //   '430' : '420px',
        //   '350': '350px',
        //   '388' : '388px',
        // },
        colors: {
            primary: '#6F528A',
            secondary: '#B0F1C3',
            background: '#FFF7FE',
            cardColor: '#FFFFFF',
            darkGreen: '#00210F',
            heading: '#161D1C',
            subHeading: '#4A454D',
            timerRed: '#FE4A49',
            HighestBidder: '#2C6A46',
            surfaceBright: '#F4FBF9'
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontFamily: {
            'Geist': ['Geist'],
            'kollektif': ['Kollektif']
        }
    },
    plugins: [],
}

