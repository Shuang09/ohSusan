import Head from "next/head";
import styles from "../styles/home.module.css";

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
          A software engineer based in Montreal, passionate about the art of
          merging technology and creativity. I see myself not just as a coder
          but as a problem solver, driven by the curiosity to understand the
          "why" and "how" of every challenge.
          <br></br>
          Beyond the world of code, I'm an artist at heart. Drawing is my
          canvas, and I find joy in exploring the rich interplay of colors and
          textures. This artistic inclination seeps into my approach to software
          engineering, where I consider each project a unique masterpiece
          waiting to be crafted.
          <br></br>I thrive in the synergy of logic and creativity, where coding
          becomes an art form. My portfolio reflects not only my technical
          prowess but also my commitment to innovative solutions and a keen
          aesthetic sense.
          <br></br>I am an avid reader. This love for literature enriches my
          perspective, infusing my work with a depth that goes beyond the
          surface.
          <br></br>
          Join me on this journey where technology meets art, and problems
          transform into opportunities. Let's create something exceptional
          together.
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
