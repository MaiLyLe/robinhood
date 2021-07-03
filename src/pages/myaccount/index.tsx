import React from 'react'
import { NextPage, GetServerSideProps } from 'next'

import Layout from '../../modules/Layout/Layout'

const MyAccount: NextPage<{}> = () => {
    return (
        <Layout>
            <div>my account</div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //data fetching goes here
    return {
        props: {},
    }
}

export default MyAccount
