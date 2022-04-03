import React, { useState, useEffect } from 'react'
/** Styles */
import styles from './style.module.css';

const Card = ({children}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_body}>
                {children}
            </div>
        </div>
    )
}

export default Card