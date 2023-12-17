import React from "react";
import styles from '../Card/Card.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const InfoSection = (props) => {
    return (
        <div className={styles.infoSection}>
            <div><FontAwesomeIcon icon={faClock} style={{color: "#a6a6a6"}}/> {props.info.hr} hrs</div>
            <div><FontAwesomeIcon icon={faUserGroup} style={{color: "#a6a6a6"}}/> {props.info.attendance}</div>
            <div><FontAwesomeIcon icon={faBook} style={{color: "a6a6a6"}}/> {props.info.lectures}</div>
        </div>
    )
}

export default InfoSection;