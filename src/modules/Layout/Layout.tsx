import * as React from 'react'
import { Header } from '../Header/Header'
import * as S from './styles'
type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
    return (
        <S.Wrapper>
            <Header></Header>
            {children}
        </S.Wrapper>
    )
}

export default Layout
