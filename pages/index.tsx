import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // @ts-ignore
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>henrik</title>
        <meta name="description" content="Self Improvement" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Henrik</a>
        </h1>

        <p className={styles.description}>
          Get back into life!
        </p>

        <div className={styles.grid}>
          <Link href="#youtube">
            <a href="#youtube" className={styles.card}>
              <h2>Youtube Channel &rarr;</h2>
              <p>Free videos to help you get back into Life.</p>
            </a>
          </Link>

          <Link href="#courses">
            <a className={styles.card}>
              <h2>Courses &rarr;</h2>
              <p>Intermediate Self Improvement knowledge provided to you.</p>
            </a>
          </Link>

          <Link href="#coaching">
            <a
              className={styles.card}
            >
              <h2>Coaching &rarr;</h2>
              <p>1 to 1 coaching with me to speak about your SI journey</p>
            </a>
          </Link>

          <Link href="#products">
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Products &rarr;</h2>
              <p>
                Helpful products helping and supporting you on your journey
              </p>
            </a>
          </Link>
        </div>

        {/* SEPERATOR FOR YOUTUBE*/}
        <div className={styles.seperator} id="youtube"></div>

        <div className={styles.youtube}>
          <iframe src="https://www.youtube.com/embed/4VaiFFYZYGY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
          <iframe src="https://www.youtube.com/embed/xRh5R0MHfdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
          <iframe src="https://www.youtube.com/embed/L5CFg5-XW4w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
          <iframe src="https://www.youtube.com/embed/SMj1pKrhzkk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        </div>

        {/* SEPERATOR FOR COACHING */}
        <div className={styles.seperator}></div>

        <h1 id="coaching">One to One coaching</h1>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScexWWqdwPJiHm-ErtsN3Tp5MYtUPg78A7FXc9UyhM5RfUv6A/viewform?embedded=true" width="80%" height="908" frameBorder="0" marginHeight={0} marginWidth={0}>Wird geladen…</iframe>

        {/* SEPERATOR FOR  */}
        <div className={styles.seperator}></div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.youtube.com/channel/UCfkIuCa8CmkPYzN4OiHe0iA"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Youtube Channel{' '}
        </a>

        <a
          href="https://www.instagram.com/henriklmn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Instagram Profile{' '}
        </a>
      </footer>
    </div>
  )
}

export default Home
