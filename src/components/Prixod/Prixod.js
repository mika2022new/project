import React from 'react';

import styles from './Prixod.module.css';

const Prixod = (props) => {

    // const deleteHandler = () => {
    //     props.onDelete(props.id);
    //   };

    return (
        <div 
        className={styles.list__card}
        // onClick={deleteHandler}
        >
        {props.children}
      </div>
    );

};

export default Prixod;