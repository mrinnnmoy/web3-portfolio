import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio-web3</title>
        <meta name="viewport" content="initial-scale-1.0, width=device-width" />
      </Head>
      <HomePage />
    </div>
  )
}
