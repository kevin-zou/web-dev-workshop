import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Menu from '../components/Menu/Menu'

export default function Home() {
  return (
    <>
      <Head>
        <title>HackCamp Cafe</title>
        <meta name="description" content="The best cafe at HackCamp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.png" height="128px" alt="HackCamp logo" />
        <h1>HackCamp Cafe</h1>
      </header>

      <main className={styles.main}>
        <Menu />
      </main>

      <footer className={styles.footer}>
        <div>This is a project made for <a href="https://hackcamp.nwplus.io" target="_blank" rel="noopener noreferrer">HackCamp 2021</a>.</div>
        <div className={styles.links}>
          <a
            href="https://github.com/kevin-zou/web-dev-workshop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
          <a
            href="https://nwplus.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet the team
          </a>
        </div>
      </footer>
    </>
  )
}
