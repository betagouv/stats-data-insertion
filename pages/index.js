import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stats data.insertion</title>
        <meta name="description" content="Statistiques data insertion" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>data.insertion - Statistiques</h1> */}

        <div className={styles.flexbox}>
          <div className={styles.map}>
            <div
              class="flourish-embed flourish-map"
              data-src="visualisation/7095136"
              data-height="700px"
            >
              <script src="https://public.flourish.studio/resources/embed.js"></script>
            </div>{" "}
          </div>
          <div className={styles.legend}>
            <h3>data.insertion - Carte de suivi</h3>
            <p>
              Le code couleur de la carte exprime la maturité du CD dans l'intégration et
              l’exploitation des flux de données existants (CNAF et PE)
            </p>
            <p>
              <span className={styles.darkblue}></span>&nbsp; Le CD automatise l’integration de
              l’ensemble des flux et l’exploite dans ses process d’orientation et accompagnement
            </p>
            <p>
              <span className={styles.middleblue}></span>&nbsp; Le CD intègre l’ensemle des flux
              existants mais ne l’exploite pas encore pleinement dans ses process
            </p>
            <p>
              <span className={styles.lightblue}></span>&nbsp; L’ensemble des flux existants n’est
              pas encore intégre dans les logiciels metiers
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
