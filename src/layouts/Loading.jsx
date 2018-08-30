import React from 'react';
import styles from './Loading.scss';

const Loading = ({ error, pastDelay }) => {
  if (error) {
    return <div className={`${styles.loading} ${styles.error}`}><span>Error</span></div>;
  }
  if (pastDelay) {
    return <div className={`${styles.loading} ${styles.circle}`}><span>Loading...</span></div>;
  }
  return null;
};

export default Loading;
