import React from 'react';

import styles from './Header.module.css';

import IconImage from "../../assets/icon.jpg";
import ClockImage from "../../assets/clock.jpg";



const Header = (props) => {
    return (
        <React.Fragment>
                    <header className={styles.header}>

                        <div className={styles.header__content}>
                            
                            <img className={styles.header__content_icon} 
                            src={IconImage} alt="icon"/>
                            <p>inventory</p>

                            <input 
                            name="search" 
                            type="text" 
                            placeholder="Search" 
                            id="search"/>
                        </div>   


                        <div className={styles.header__content_date}>

                            <div className={styles.header__date}>
                                <span>Vtornik</span>
                                <span>06 Apr, 2017</span>
                            </div>
                            
                            <div className={styles.header__time}>
                                <img className={styles.header__time_clock}
                                src={ClockImage} alt="clock"/>
                                <span className={styles.header__time_num}>17:20</span>
                            </div>

                        </div>
                    </header>


        </React.Fragment>
    );
};

export default Header;