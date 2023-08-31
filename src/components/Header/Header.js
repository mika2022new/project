import React, { useState, useEffect } from 'react';

import styles from './Header.module.css';

import IconImage from "../../assets/icon.jpg";
import ClockImage from "../../assets/clock.jpg";


const Header = (props) => {
    const lang = navigator.language;
    let current = new Date();

    let dayName = current.toLocaleString(lang,{weekday: 'long' });
    let date = `
    ${current.getDate()} ${current.toLocaleString(lang,{ month: 'long' })}, ${current.getFullYear()}
    `;    

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);
    
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
                                <span>{dayName}</span>
                                <span>{date}</span>
                            </div>
                            
                            <div className={styles.header__time}>
                                <img className={styles.header__time_clock}
                                src={ClockImage} alt="clock"/>
                                <span className={styles.header__time_num}>
                                {dateState.toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: false,
                                })}
                                    </span>
                            </div>
                        </div>
                    </header>

        </React.Fragment>
    );
};

export default Header;