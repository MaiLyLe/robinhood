import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage, GetServerSideProps } from 'next'

import Layout from '../../modules/Layout/Layout'
import { ShiftPickerForm } from '../../modules/ShiftPickerForm/ShiftPickerForm'

const ShiftPlan: NextPage<{}> = () => {
    return (
        <Layout>
            <ShiftPickerForm></ShiftPickerForm>
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

export default ShiftPlan
