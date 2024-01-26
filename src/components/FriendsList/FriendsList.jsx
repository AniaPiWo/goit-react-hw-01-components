import React from 'react';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={friend.isOnline ? styles.online : styles.offline}
          ></span>
          <div className={styles.box}>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt=""
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
