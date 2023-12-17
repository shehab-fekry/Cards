import React from "react";
import styles from '../Card/Card.module.css';

const DetailSection = (props) => {
    return (
        <div className={styles.detailSection}>
            <div className={styles.textSide}>
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
            </div>
            <div className={styles.offerSide} style={{float: !props.discount && 'inline-start', paddingLeft: !props.discount && '15px'}}>
                <div className={styles.price} style={{textDecorationLine: !!props.discount && 'line-through', color: !props.discount && '#009ace'}}>
                    {props.price ? `$${props.price}` : 'FREE'}
                </div>
                {!!props.discount && (
                <div className={styles.discount}>
                    ${props.price - props.discount}
                </div>
                )}
                
                {!!props.discount && (
                <div className={styles.save}>
                    You Save ${props.discount}
                </div>
                )}
            </div>
        </div>
    )
}

export default DetailSection;