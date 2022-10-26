import React from 'react'
import Image from 'next/image'
import styles from "../styles/AccountDetails.module.css"

const PERSONAL_DETAILS = [
  {
    id: 'group',
    icon: '/assets/icons/png/group.png',
    text: '2,500 Connections'
  },
  {
    id: 'marker',
    icon: '/assets/icons/png/marker.png',
    text: 'Lagos, Nigeria'
  },
  {
    id: 'envelope',
    icon: '/assets/icons/png/envelope.png',
    text: 'coporatetumise@gmail.com'
  },
  {
    id: 'phone',
    icon: '/assets/icons/png/phone.png',
    text: '08101667299'
  },
  {
    id: 'website',
    icon: '/assets/icons/png/website.png',
    text: '2,500 Connections'
  },
];

const SOCIAL_ACCOUNTS = [
  {
    id: 'facebook',
    icon: '/assets/icons/png/facebook.png',
    handle: 'Kelvin Klein'
  },
  {
    id: 'twitter',
    icon: '/assets/icons/png/twitter.png',
    handle: '@kelvinklein'
  },
  {
    id: 'instagram',
    icon: '/assets/icons/png/instagram.png',
    handle: '@kelvinklein'
  },
  {
    id: 'linkedin',
    icon: '/assets/icons/png/linkedin.png',
    handle: 'Kelvin Klein'
  },
]

export const AccountDetails = () => {
  return (
    <div className={styles.accountDetailsContainer}>
      <div className={styles.personal_details}>
        <h3>Personal Details</h3>
        <div className={styles.listDetails}>
          {PERSONAL_DETAILS.map((item) => (
          <div key={item.id} className={styles.itemDetails}>
            <Image src={item.icon} alt={item.id} width="20" height="15" />
            <p>{item.text}</p>
          </div>
          ))}
        </div>
      </div>
      <div className="social_accounts">
        <h3>Social Accounts</h3>
        <div className={styles.listDetails}>
          {SOCIAL_ACCOUNTS.map((item) => (
          <div key={item.id} className={styles.itemDetails}>
            <Image src={item.icon} alt={item.id} width="20" height="20" />
            <p>{item.handle}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
