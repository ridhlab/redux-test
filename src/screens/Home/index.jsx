import React, { useState, useEffect } from 'react';
/** Styles */
import styles from './style.module.css';
/** Components */
import Card from '../../components/Card';
import Form from '../../components/Form';

const Home = () => {
    const [inputs, setInputs] = useState([
        {
            label: 'Name',
            type: 'text',
            placeholder: 'Input your Name here',
            value: ''
        },
        {
            label: 'Faculty',
            type: 'text',
            placeholder: 'Input your Faculty here',
            value: ''
        },
        {
            label: 'Semester',
            type: 'number',
            placeholder: 'Input your current Semester here',
            value: 0
        },
        {
            label: 'Email',
            type: 'email',
            placeholder: 'Input your Email here',
            value: ''
        }
    ])

    return (
        <div className={styles.container}>
            <h1>Redux Test</h1>
            <div className={styles.form_wrapper}>
                <Card>
                    <Form inputs={inputs} setInputs={setInputs}/>
                </Card>
            </div>
        </div>
    )
    
}

export default Home;