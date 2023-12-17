import React from "react";
import styles from '../Card/Card.module.css';

const ImageSection = (props) => {
    return (
        <div className={styles.imageSection}>
            <img src={props.img} alt="Image"/>
        </div>
    )
}

export default ImageSection;