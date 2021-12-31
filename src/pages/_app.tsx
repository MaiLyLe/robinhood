import React from 'react'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next'

import '../styles/Tailwind.css'

import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyles'
import type { AppProps } from 'next/app'
import { StoreProvider, useHydrate } from '../lib/zustand'

function RobinHood({ Component, pageProps }: AppProps) {
    const store = useHydrate(pageProps.initialZustandState)

    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </StoreProvider>
    )
}
export default appWithTranslation(RobinHood)
