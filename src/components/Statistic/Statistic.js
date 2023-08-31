import React from 'react';
import styles from './Statistic.module.css';
import IconImage2 from "../../assets/icon2.jpg";

const Statistic = (props) => {
    return (
        <React.Fragment>
            <div className={styles.list__title}>
            <img className={styles.header__content_icon2} 
            src={IconImage2} alt="icon2"/>
            <p>Prixodi / 25</p>
            </div>
        </React.Fragment>
    );
};

export default Statistic;