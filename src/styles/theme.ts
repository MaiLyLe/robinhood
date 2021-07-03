import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
    ffRegular:
        "'Helvetica LT','Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    // colors: {
    //     black: '#000',
    //     white: '#fff',
    //     midGrey: '#999',
    //     darkGrey: '#555555',
    //     lightGrey: '#f3f3f3',
    //     lightGrey2: '#DDDDDD',
    //     red: '#e24f57',
    //     orange: '#fe5000',
    //     green: '#39dc9a',
    // },
    breakpoints: {
        small: '@media (min-width: 600px)',
        medium: '@media (min-width: 1024px)',
        desktop: '@media (min-width: 1200px)',
        large: '@media (min-width: 1440px)',
        xLarge: '@media (min-width: 1920px)',
    },
}
export { theme }
