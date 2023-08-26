import React from 'react';

import styles from './ContentList.module.css';

import Statistic from '../Statistic/Statistic';
import MainList from '../MainList/MainList';

const ContentList = (props) => {
    return (
        <React.Fragment>

            <div classNameName={styles.list}>

                <Statistic />

                <MainList />

            </div>
            
        </React.Fragment>
    );
};

export default ContentList;