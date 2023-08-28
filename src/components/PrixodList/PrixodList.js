import React from 'react';

import Prixod from '../Prixod/Prixod';
import Menu from '../Menu/Menu';
import Statistic from '../Statistic/Statistic';

import styles from './PrixodList.module.css';

import ListImage from "../../assets/list.jpg";
import DeleteImage from "../../assets/delete.jpg";



const PrixodList = (props) => {
    return (

        <div className={styles.list}>
            <Menu />

            <div>

                <Statistic />


            {props.items.map((task) => (
                <Prixod key={task.id} id={task.id} onDelete={props.onDeleteTask}>

                    <div className={styles.list__card_title}>
                        {task.title}
                     </div>

                    <div className={styles.list__card_icon}>
                        <img className={styles.header__content_list} 
                        src={ListImage} alt="list"/>
                    </div>

                    <div className={styles.list__card_amount}>
                    <span className={styles.list__amount_num}>{task.quant}</span>
                    <span>{task.quantext}</span>
                </div>

                <div className={styles.list__card_date}>
                    <span className={styles.list__date_num}>{task.date1}</span>
                    <span>{task.date2}</span>
                </div>

                <div className={styles.list__card_price}>
                    <span className={styles.list__price_num}>{task.amount1}</span>
                    <span>{task.amount2}
                    <span className={styles.devise}>{task.dev}</span></span>
                </div>

                <div className={styles.list__card_delete}>
                    <img src={DeleteImage} alt="delete"/>
                </div>

                </Prixod>
            ))}
            </div>
            
        </div>
    );
};

export default PrixodList;