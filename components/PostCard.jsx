import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/PostCard.module.css'

const REACTED_USERS = [
  '/assets/images/png/friend1.png',
  '/assets/images/png/friend2.png',
  '/assets/images/png/friend3.png',
]

export const PostCard = () => {
  return (
    <div className={styles.postCardContainer}>
      <article>
        <header className={styles.cardHeader}>
          <div className={styles.cardHeader_left}>
            <Image className={styles.postAuthor} src="/assets/images/png/friend2.png" alt="" width="50" height="50" />
            <div>
              <h4>Ajayi Ayobami Joshua</h4>
              <p className={styles.city}>Lagos, Nigeria</p>
              <p>28 March, 2022.</p>
            </div>
          </div>
          <Image src="/assets/icons/png/horizontalIcon.png" alt='' width="20" height="5" />
        </header>
        <main className={styles.cardBody}>
          <Image className={styles.postBanner} src="/assets/images/png/post_cover_img.png" alt="" width="800" height="0" />
          <span>Entertainment</span>
          <div className={styles.sourceContainer}>
            <div>
              <p>WWW.NAIRALAND.COM</p>
              <h3>Best Way to Sell Your Product to Many Clients</h3>
            </div>
            <Link href="/">Learn More</Link>
          </div>
        </main>
        <footer className={styles.cardFooter}>
          <div className={styles.iconsBox}>
            <div className={styles.flexIcons}>
              <Image src="/assets/icons/png/love.png" alt='' width="20" height="20" />
              <Image src="/assets/icons/png/download.png" alt='' width="23" height="20" />
              <Image src="/assets/icons/png/share.png" alt='' width="20" height="20" />
            </div>            
              <Image src="/assets/icons/png/bookmark.png" alt='' width="20" height="35" />
          </div>
          <div className={styles.postStats}>
            <div>
              {REACTED_USERS.map((user, idx) => (
                <Image
                  key={user} src={user} 
                  alt="" 
                  width="800" height="0"
                  style={{ marginLeft: `-${idx + 15}px`, zIndex: idx}}
                />
              ))}
            </div>
            <p>
              Liked by <span>Kemi Smallz</span> and <span>1,002 others</span>
            </p>
          </div>
          <div>
            <p className={styles.postComment}>
              <span>Ella Roy</span>
              Those who will continue to make money are the ones that refused to consume all they earned but invested for their tomorrow.
            </p>
          </div>
        </footer>
      </article>
    </div>
  )
}
