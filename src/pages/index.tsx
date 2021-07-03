import Head from 'next/head'
import Layout from '../modules/Layout/Layout'
import { ShiftPickerForm } from '../modules/ShiftPickerForm/ShiftPickerForm'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <>home</>
            </Layout>
        </div>
    )
}
