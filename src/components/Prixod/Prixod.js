import React from 'react';

import styles from './Prixod.module.css';

const Prixod = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id);
      };


    return (
        // <div className={styles.list__card} onClick={deleteHandler}>
        <div className={styles.list__card} onClick={deleteHandler}>

        {props.children}
        {/* <p>{props.tasks.id}</p> */}
      </div>
    );
    

};

export default Prixod;