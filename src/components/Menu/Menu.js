import React from 'react';

import styles from './Menu.module.css';

import FaceImage from "../../assets/face.jpg";

const Menu = (props) => {
    return (
        <React.Fragment>
            <div className={styles.menu}>
                
                <div className={styles.menu__content}>
                    <img className={styles.menu__content_face} src={FaceImage} alt="face"/>

                    <div className={styles.menu__list}>
                        <ul>
                            <li>
                                <a href="#">Prixod</a>
                            </li>
                            <li>
                                <a href="#">Groups</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Users</a>
                            </li>
                            <li>
                                <a href="#">Settings</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
};

export default Menu;