import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Born11</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <div>
                    </div>
                </div>

                <div className={styles.center}>
                    <div className='flex flex-col'>
                        <div className={` font-semibold text-md mb-2`}>Hey! Check back soon.</div>
                        <div className={` font-bold text-2xl`}>
                            We are under maintenance.
                        </div>

                    </div>
                </div>

                {/* <div className={styles.grid}>
                    <a
                        href="https://github.com/mnshk"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            GitHub <span>-&gt;</span>
                        </h2>
                        <p >
                            github.com/mnshk
                        </p>
                    </a>

                    <a
                        href="https://linkedin.com/in/mnshk"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            LinkedIn <span>-&gt;</span>
                        </h2>
                        <p >
                            linkedin.com/in/mnshk
                        </p>
                    </a>

                    <a
                        href="https://instagram.com/mnsh.kk"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Instagram <span>-&gt;</span>
                        </h2>
                        <p >
                            instagram.com/mnsh.kk
                        </p>
                    </a>

                    <a
                        href="https://twitter.com/mnshkk"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Twitter <span>-&gt;</span>
                        </h2>
                        <p >
                            twitter.com/mnshkk
                        </p>
                    </a>
                </div> */}

            </main>
        </>
    )
}
