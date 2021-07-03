import React from 'react'
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
    return {
        props: {},
    }
}

export default ShiftPlan
