import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>app title</title>
            <meta name="description" content="amincxo is good developer"  />
        </Head>
        <Component {...pageProps} />
    </>
)
}
