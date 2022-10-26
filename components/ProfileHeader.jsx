import React from 'react'
import Image from 'next/image'
import styles from './../styles/ProfileHeader.module.css'

export const ProfileHeader = () => {
  return (
    <div className='container'>
      <div className={styles.profileHeaderWrapper}>
        <div className={styles.profileHeaderLeftContainer}>
          <div className={styles.profileDetailBox}>
            <div>
              <Image className={styles.profileImage} src="/assets/images/png/profile_pic.png" width="50" height="50" alt='profile' />
              <Image className={styles.updateProfileIcon} src="/assets/icons/png/camera.png" width="15" height="14" alt="search icon" />
            </div>
            <div className={styles.profileDetailContent}>
              <h2>
                Kelvin Klein <span>
                  <Image src="/assets/icons/png/crown.png" alt='' width="20" height="15" /> 
                  LV1
                </span>
                </h2>
              <p>@kelklein11</p>
              <p>UI/UX Designer, UI Developer, full blooded Man Utd fan.</p>
            </div>
          </div>
        </div>
        <div className={styles.profileHeaderRightContainer}>
          <div className={styles.connections}>
            <div>
              <Image className={styles.icon} src="/assets/icons/png/horizontalIcon.png" width="30" height="9" alt="search icon" />              
            </div>
            <div className={styles.profileAction}>
              <Image className={styles.icon} src="/assets/icons/png/chat.png" width="15" height="14" alt="search icon" />
              Message
            </div>
            <div className={styles.profileAction}>
              <Image className={styles.icon} src="/assets/icons/png/user-active.png" width="20" height="15" alt="search icon" />
              <span style={{ color: "white"}}>Connected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
