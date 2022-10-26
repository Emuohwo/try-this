import Head from 'next/head'
import Image from 'next/image'
import { AccountDetails } from '../components/AccountDetails'
import { Connections } from '../components/Connections'
import { Header } from '../components/header/Header'
import { PostCard } from '../components/PostCard'
import { ProfileHeader } from '../components/ProfileHeader'
import { SectionTitle } from '../components/SectionTitle'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>User Profile | Wield</title>
        <meta name="description" content="Wield web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ProfileHeader />
      
      <div className='container'>
        <main className={styles.main}>
          <section className={styles.leftSection}>
            <AccountDetails />
            <Connections />
          </section>
          <section className={styles.rightSection}>
            <SectionTitle title="Kelvin's Post" />
            <PostCard />
          </section>
        </main>
      </div>

      <div className='container'>
        <div className='messageChat'>
          <h2>Message</h2>
          <Image src="/assets/icons/png/chevrons-up.png" alt='' width="30" height="25" />
        </div>
      </div>

    </div>
  )
}
