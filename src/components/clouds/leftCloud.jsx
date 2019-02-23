import React from 'react';
import styles from './leftCloud.module.css';

//Image SRC
import leftCloudSvg from '../../assets/leftCloud.svg';

const leftCloud = () => {
    return (
        <img className={styles['left-cloud']} src={leftCloudSvg} alt="animated cloud" />
    )
}

export default leftCloud;