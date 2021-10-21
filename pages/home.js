import Head from 'next/head'
import Loginform from '../components/LoginForm'
import Router from 'next/router'
import checkCookies from '../components/checkCookies'
import Main from '../components/main_page'



export default function Home() {
    <Head>
        <title>Candl</title>
    </Head>

    const a = checkCookies()

    if (a == 'null') {
        return null
    } else if (a == 'not logged in') {
            Router.push('/login')
    } else {
        return(
            <>
            <Main />
            </>
        )
    }

    return (
        null
    )
}