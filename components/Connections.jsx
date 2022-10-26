import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../styles/Connections.module.css";

const CONNECTION_LIST = [
  {
    id: 'friend1',
    profile_pic: '/assets/images/png/friend1.png',
    profile_name: 'Ellaquita Florence'
  },
  {
    id: 'friend2',
    profile_pic: '/assets/images/png/friend2.png',
    profile_name: 'Ellaquita Florence'
  },
  {
    id: 'friend3',
    profile_pic: '/assets/images/png/friend3.png',
    profile_name: 'Ellaquita Florence'
  },
  {
    id: 'friend2a',
    profile_pic: '/assets/images/png/friend2.png',
    profile_name: 'Ellaquita Florence'
  },
  {
    id: 'friend5',
    profile_pic: '/assets/images/png/friend2.png',
    profile_name: 'Ellaquita Florence'
  },
  {
    id: 'friend4',
    profile_pic: '/assets/images/png/friend4.png',
    profile_name: 'Ellaquita Florence'
  },
  {
    id: 'friend6',
    profile_pic: '/assets/images/png/friend3.png',
    profile_name: 'Ellaquita Florence'
  },
  {
    id: 'friend7',
    profile_pic: '/assets/images/png/friend2.png',
    profile_name: 'Ellaquita Florence'
  },
];

export const Connections = () => {
  return (
    <section className={styles.connectionSectionContainer}>
      <div className={styles.titleBox}>
        <h3>Connections</h3>
        <Link href="/#">See all</Link>
      </div>
      <div className={styles.connectionsList}>
        {CONNECTION_LIST.map((item) => (
          <div key={item.id} className={styles.userConnected}>
            <Image className={styles.profilePic} src={item.profile_pic} alt="" width="100" height="70" />
            <p className={styles.profileName}>{item.profile_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
