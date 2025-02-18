import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "'Poppins', sans-serif",
        body: "'Poppins', sans-serif"
    },
    colors: {
        brand: {
            50: '#f5f7fa',
            100: '#e1e8f0',
            200: '#c4d6e8',
            300: '#a7c4e0',
            400: '#8ab2d8',
            500: '#6da0d0',
            600: '#4a7f9e',
            700: '#366b7c',
            800: '#245a5c',
            900: '#123a3c',
        },
        green: {
            50: '#f0fff4',
            100: '#c6f6d5',
            200: '#9ae6b4',
            300: '#68d391',
            400: '#48bb78',
            500: '#38a169',
            600: '#2f855a',
            700: '#276749',
            800: '#22543d',
            900: '#1c4532',
        },
        gold: {
            50: '#fff9e6',
            100: '#ffebc8',
            200: '#ffdb9e',
            300: '#ffcc66',
            400: '#ffb84d',
            500: '#ffa300',
            600: '#e59400',
            700: '#cc7a00',
            800: '#b36200',
            900: '#995200',
        },
    },
    styles: {
        global: {
            body: {
                bg: 'brand.600',
                color: 'gray.50'
            }
        }
    }
});

export default theme;