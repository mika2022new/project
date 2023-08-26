import React from 'react';
import Cart from '../Cart/Cart';

import styles from './MainList.module.css';


const MainList = (props) => {
    return (
        <React.Fragment>
            <div className={styles.list__content}>

                <Cart />
                <Cart />
                <Cart />
                <Cart />

            </div>
            
        </React.Fragment>
    );
};

export default MainList;