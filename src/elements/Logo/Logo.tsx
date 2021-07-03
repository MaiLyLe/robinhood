import * as React from 'react'
import Image from 'next/image'
import RobinFullLogo from './assets/fulllogo.svg'

import * as S from './styles'

type Props = {
    isHeaderDark?: boolean
}

export const Logo: React.FC<Props> = ({ isHeaderDark }) => {
    return (
        <S.Logo
            isHeaderDark={isHeaderDark}
            // dangerouslySetInnerHTML={{
            //     __html: require('./assets/fulllogo.svg?include'),
            // }}
        >
            <RobinFullLogo />
        </S.Logo>
    )
}
