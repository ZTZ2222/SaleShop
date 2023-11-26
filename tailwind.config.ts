import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                '3xl': '1920px',
            },
            colors: {
                'bSnowWhite': '#ffffff',
                'bGhostWhite': '#f8f8f8',
                'bPearlWhite': '#f2f2f2',
                'bMoonWhite': '#eeeeee',
                'bSilverCloud': '#dddddd',
                'bBerryRed': '#d01345',
                'bGraphiteGrey': '#666666',
                'bCharcoalGrey': '#525050',
                'bOnyxBlack': '#2d2d2d',
                'bEclipseGrey': '#2d2d2da6',
                'bMidnightBlack': '#000000',
                'tSnowWhite': '#ffffff',
                'tMoonWhite': '#eeeeee',
                'tGraphiteGrey': '#666666',
                'tOnyxBlack': '#2d2d2d',
                'tMidnightBlack': '#000000',
                'oSnowWhite': '#ffffff',
                'oGhostWhite': '#f8f8f8',
                'oPearlWhite': '#f2f2f2',
                'oMoonWhite': '#eeeeee',
                'oSilverCloud': '#dddddd',
                'oDoveGrey': '#999999',
                'oCharcoalGrey': '#525050'
            },
            borderRadius: {
                '2.5xl': '20px',
                '4xl': '32px',
                '5xl': '40px',
                '6xl': '48px',
                'full': '100%',
            }
        },
    },
    plugins: [],
};
export default config;
