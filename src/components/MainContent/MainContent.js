import React from 'react';

import Menu from '../Menu/Menu';
import ContentList from '../ContentList/ContentList';

import styles from './MainContent.module.css';


const MainContent = (props) => {
    return (
        <React.Fragment>

            <div className={styles.main__content}>
                <Menu />
                <ContentList />
            </div>
            
        </React.Fragment>
    );
};

export default MainContent;