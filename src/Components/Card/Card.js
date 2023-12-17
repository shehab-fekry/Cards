import React from "react";
import styles from './Card.module.css';

import ImageSection from "../CardSections/ImageSection";
import DetailSection from "../CardSections/DetailSection";
import InfoSection from "../CardSections/InfoSection";

const Card = (props) => {
    const {image, title, paragraph, price, discount, extra} = props.card;
    return (
        <div className={styles.Card}>
            <ImageSection img={image}/>
            <DetailSection title={title} paragraph={paragraph} price={price} discount={discount}/>
            <InfoSection info={extra}/>
        </div>
    )
}

export default Card;