import React from 'react';
import styles from './weatherLoader.module.css';
import 'loaders.css/loaders.min.css';

const weatherLoader = (props) => {
    return (
        <React.Fragment>
            {(props.isLoadingCurrent || props.isLoadingForecast) && 
            <section className={styles['loader-section']}>
                <div className={styles['outer'] + ' ' + 'ball-scale-multiple'}>
                    <div className={styles['inner-ball']}></div>
                    <div className={styles['inner-ball']}></div>
                    <div className={styles['inner-ball']}></div>
                </div>
                <p className={styles['loading-text']}>
                    Loading Weather...
                </p>
            </section>}
        </React.Fragment>
    )
}

export default weatherLoader;