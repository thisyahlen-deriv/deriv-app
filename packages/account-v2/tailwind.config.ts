import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.d-none': {
                    display: 'none',
                },
            });
        }),
    ],
    theme: {
        extend: {
            borderRadius: {
                none: '0',
                xs: '4px',
                sm: '6px',
                default: '8px',
                lg: '12px',
                xl: '16px',
                full: '50%',
            },
            borderWidth: {
                0: '0',
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                6: '6px',
                7: '7px',
                8: '8px',
                9: '9px',
                10: '10px',
            },
            fontSize: {
                '2xs': '8px',
                xs: '10px',
                sm: '12px',
                default: '14px',
                lg: '16px',
                xl: '18px',
                '2xl': '20px',
                '3xl': '22px',
                '4xl': '24px',
                '5xl': '26px',
                '6xl': '28px',
                '7xl': '30px',
                '8xl': '32px',
            },
            colors: {
                solid: {
                    grey: {
                        '1': '#999999',
                        '2': '#f2f3f4',
                        '5': '#d6dadb',
                        '6': '#d6d6d6',
                        '14': '#e9ecef',
                    },
                    black: {
                        '0': '#0e0e0e',
                        '3': '#151717',
                        '8': '#323738',
                    },
                    red: {
                        '5': '#eb3e48',
                    },
                    green: {
                        '1': '#4bb4b3',
                        '2': '#C7E5E5',
                    },
                },
                status: {
                    dark: {
                        danger: '#cc2e3d',
                        general: '#ffffff',
                        information: '#377cfc',
                        success: '#00a79e',
                        warning: '#ffad3a',
                    },
                    light: {
                        danger: '#ec3f3f',
                        information: '#377cfc',
                        success: '#4bb4b3',
                        warning: '#ffad3a',
                    },
                },
                system: {
                    dark: {
                        'active-background': '#323738',
                        'disabled-text': '#3e3e3e',
                        'general-text': '#c2c2c2',
                        'hover-background': '#242828',
                        'less-prominent': '#6e6e6e',
                        'less-prominent-text': '#6e6e6e',
                        'primary-background': '#0e0e0e',
                        'prominent-text': '#ffffff',
                        'secondary-background': '#151717',
                        'text-info-blue-background': '#182130',
                    },
                    light: {
                        'active-background': '#d6dadb',
                        'disabled-text': '#d6d6d6',
                        'general-text': '#333333',
                        'hover-background': '#e6e9e9',
                        'less-prominent': '#999999',
                        'less-prominent-text': '#999999',
                        'primary-background': '#ffffff',
                        'prominent-text': '#333333',
                        'secondary-background': '#f2f3f4',
                        'text-info-blue-background': '#dfeaff',
                    },
                },
            },
            screens: {
                sm: { max: '600px' },
                md: { min: '601px' },
                lg: { min: '1280px' },
                xl: { min: '1440px' },
            },
            opacity: {
                0: '0',
                4: '0.04',
                8: '0.08',
                16: '0.16',
                24: '0.24',
                32: '0.32',
                40: '0.4',
                48: '0.48',
                56: '0.56',
                64: '0.64',
                72: '0.72',
                80: '0.8',
                88: '0.88',
                96: '0.96',
                100: '1',
                overlay: '0.72',
                disabled: ' 0.32',
            },
            spacing: {
                0: '0px',
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                6: '6px',
                7: '7px',
                8: '8px',
                9: '9px',
                10: '10px',
                11: '11px',
                12: '12px',
                14: '14px',
                16: '16px',
                18: '18px',
                20: '20px',
                22: '22px',
                24: '24px',
                26: '26px',
                28: '28px',
                30: '30px',
                32: '32px',
                34: '34px',
                36: '36px',
                38: '38px',
                40: '40px',
                42: '42px',
                44: '44px',
                46: '46px',
                48: '48px',
                50: '50px',
                52: '52px',
                54: '54px',
                56: '56px',
                58: '58px',
                60: '60px',
            },
        },
    },
} satisfies Config;
