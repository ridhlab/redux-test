import React, { useState, useEffect } from 'react';
/** Style */
import styles from './style.module.css';
/** Component */
import Card from '../../components/Card';
import Table from '../../components/Table';
/** React Router */
import { Link } from 'react-router-dom';

const List = () => {
    return (
        <div className={styles.container}>
        <Link to="/" className={styles.link}>Back</Link>
        <h1>Redux Test</h1>
        <div className={styles.table_wrapper}>
            <Card>
                <Table/>
            </Card>
        </div>
    </div>
    )
};

export default List;
