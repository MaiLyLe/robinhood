import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../../modules/Layout/Layout'

type Props = {}

const Login: NextPage<Props> = ({}) => {
    return (
        <Layout>
            <div>Login</div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //data fetching goes here
    const { locale } = context

    return {
        props: {
            ...(await serverSideTranslations((locale as string) ?? 'en')),
        },
    }
}

export default Login
