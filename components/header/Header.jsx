import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Header.module.css'

export const Header = () => {
  return (
    <div className={styles.headerBox}>
      <header className="container">
        <div className={styles.headerFlex}>
          <div className="headerLeft">
            <Image src="/assets/images/png/wield_logo.png" width="100" height="35" alt="logo" />
          </div>
          <div className="headerMiddle">
            <div className={styles.searchContainer}>
              <Image src="/assets/icons/png/search.png" width="19" height="19" alt="search icon" />
              <input
                type="text"
                placeholder='Search people, cateogries, advertisements...'
                className={styles.searchInput}
              />
            </div>
          </div>
          <div className="headerRight">
            <div className={styles.profileDetailsBox}>
              <div className={styles.iconWrapper}>
                <Image src="/assets/icons/png/notification.png" width="19" height="19" alt="search icon" />
              </div>
              <div className={styles.iconWrapper}>
                <Image src="/assets/icons/png/wallet.png" width="19" height="19" alt="search icon" />
              </div>
              <div className={styles.iconWrapper}>
                  <Image src="/assets/icons/png/twemoji_coin.png" width="19" height="19" alt="search icon" />
                  <span>2000</span>
              </div>
              <div>
                <Image src="/assets/images/png/profile_pic.png" width="50" height="50" alt="search icon" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
