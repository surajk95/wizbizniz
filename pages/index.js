import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Dashboard from 'components/dashboard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WizBizniz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
      <style jsx>{`
        main {
          flex: 1;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #131313;
          color: white;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
