import React from 'react';
import styles from './rightCloud.module.css';

//Image SRC
import rightCloudSvg from '../../assets/rightCloud.svg';

const rightCloud = () => {
    return (
        <img className={styles['right-cloud']} src={rightCloudSvg} alt="animated cloud" />
    )
}

export default rightCloud;