import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaUserAstronaut, FaEnvelope, FaEnvelopeOpenText } from 'react-icons/fa'

import { Logo } from '../../elements/Logo/Logo'
import staticLinks from '../../lib/staticLinks'

import * as S from './styles'
type Props = {}

export const Header: React.FC<Props> = ({}) => {
    const router = useRouter()

    return (
        <S.Header>
            <S.LinkListLeft>
                <S.LinkContainer>
                    <Link href="/" aria-label="Home" passHref={true}>
                        <a>
                            <Logo />
                        </a>
                    </Link>
                </S.LinkContainer>
                {staticLinks.map((link) => (
                    <S.LinkContainer
                        isActive={router?.asPath.includes(link.url)}
                    >
                        <Link href={link.url} aria-label={link.name}>
                            <a>{link.name}</a>
                        </Link>
                    </S.LinkContainer>
                ))}
            </S.LinkListLeft>
            <S.HeaderItemListRight>
                <S.CircleButton>
                    <S.IconWrapper className="initialIcon">
                        <FaEnvelope />
                    </S.IconWrapper>
                    <S.IconWrapper className="hoveredIcon">
                        <FaEnvelopeOpenText />
                    </S.IconWrapper>
                </S.CircleButton>
                <S.CircleButton>
                    <S.IconWrapper>
                        <FaUserAstronaut />
                    </S.IconWrapper>
                </S.CircleButton>
            </S.HeaderItemListRight>
        </S.Header>
    )
}
