import Head from "next/head";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>

      <header className={styles.nav}>
        <ol>
          <li>
            github
            <a></a>
          </li>

          <li>
            linkedIn
            <a></a>
          </li>
          <li>
            Resume
            <a></a>
          </li>
        </ol>
      </header>

      <main className={styles.main}>
        <Head>
          <title>Oh Susan</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <p className={styles.description_intro}> Hi, I am</p>
        <h1 className={styles.description_title}>Susan</h1>

        <p className={styles.description}>
          description... i am gonna have a long description... Told you a really
          long one. So I can take up some space here. I will start by telling
          you my childhood stories. .. Told you a really long one. So I can take
          up some space here. I will start by telling you my childhood stories.
          .. Told you a really long one. So I can take up some space here. I
          will start by telling you my childhood stories. .. Told you a really
          long one. So I can take up some space here. I will start by telling
          you my childhood stories. ..
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Enginerring Projects &rarr;</h3>
            <p>
              Click this and you will be linked to github project details page
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Art Projects &rarr;</h3>
            <p>Click this and you will be linked to art project details page</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Other Projects &rarr;</h3>
            <p>Click this and you will be linked to other pages</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        <a>
        linkedIn
        </a>
      </footer>
    </div>
  );
}
