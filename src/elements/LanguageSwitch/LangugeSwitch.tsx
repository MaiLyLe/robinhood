import React from 'react'
import * as S from './styles'
import availableLanguages from '../../lib/availableLanguages'
import { useRouter } from 'next/router'

export const LanguageSwitch = () => {
    const router = useRouter()

    const setNewLanguageEnv = React.useCallback(
        (lang: string) => {
            if (lang !== router.locale) {
                window.location.href = `${lang !== 'en' ? `/${lang}` : ''}${
                    router.asPath
                }`
            }
        },
        [router],
    )

    const handleChange = async (
        event: React.SyntheticEvent<HTMLSelectElement>,
    ) => {
        const lang = event.currentTarget.value
        if (lang) {
            await setNewLanguageEnv(lang)
        }
    }
    return (
        <S.Wrapper>
            <S.Select onChange={handleChange}>
                {availableLanguages.map((lang) => {
                    return (
                        <option
                            value={lang.langCode}
                            selected={lang.langCode === router.locale}
                        >
                            {lang.fullName}
                        </option>
                    )
                })}
            </S.Select>
        </S.Wrapper>
    )
}
