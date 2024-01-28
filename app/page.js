import Head from "next/head";
import styles from "../styles/home.module.css";

const filePath = "./introduction.txt"


const NavBar = () => {

}

export default function Home() {
  return (
    <div className={styles.container}>
        <nav class={styles.nav}>
          <a class= {styles.a_active} href="#home">
            Home
          </a>
          <a href="#linkedIn">linkedIn</a>
          <a href="#Github">Github</a>
          <a href="#Contact">Contact</a>
        </nav>

      <main className={styles.main}>
        <Head>
          <title>Oh Susan</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <p className={styles.description_intro}> Hi, I am</p>
        <h1 className={styles.description_title}>Susan Shuhang Yan</h1>

        <p className={styles.description}>

        </p>

        <div className={styles.grid}>
          <a href="https://github.com/Shuang09" className={styles.card}>
            <h3>Enginerring Projects &rarr;</h3>
            <p>
              Click this and you will be linked to github project details page
            </p>
          </a>

          <a
            href="#artProject"
            className={styles.card}
          >
            <h3>Art Projects &rarr;</h3>
            <p>Click this and you will be linked to art project details page</p>
          </a>

          <a
            href = "#subDomain - blog"
            className={styles.card}
          >
            <h3>My Blog &rarr;</h3>
            <p>Click this and you will be linked to other pages</p>
          </a>
          <a
            href = "#travelling"
            className={styles.card}
          >
            <h3>Travelling &rarr;</h3>
            <p>
              Click this and you will be linked to traveling stuffs haven't
              figure out how
            </p>
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
        <a>linkedIn</a>
      </footer>
    </div>
  );
}
