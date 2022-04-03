import React, { useState, useEffect } from "react";
/** Styles */
import styles from "./style.module.css";
/** React Router */
import { useNavigate } from "react-router-dom";
/* redux */
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../../store/students";

const Form = ({ inputs, setInputs }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { students } = useSelector((state) => state.students);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        let objStudent = {};

        objStudent["name"] = inputs[0].value;
        objStudent["faculty"] = inputs[1].value;
        objStudent["semester"] = inputs[2].value;
        objStudent["email"] = inputs[3].value;
        objStudent["id"] = students.length + 1;

        dispatch(addStudent({ student: objStudent }));

        navigate("/list");
    };

    const handleInput = (value, input) => {
        let updateInputs = [...inputs];
        let objNewInput = {};
        for (let i = 0; i < updateInputs.length; i++) {
            if (updateInputs[i].label === input.label) {
                objNewInput = { ...updateInputs[i] };
                objNewInput["value"] = value;
                updateInputs[i] = objNewInput;
                console.log(objNewInput);
            }
        }
        console.log(updateInputs);
        setInputs(updateInputs);
        console.log(inputs);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            {inputs.map((input, inputIdx) => (
                <div className={styles.input_container} key={inputIdx}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} value={input.value} onChange={(e) => handleInput(e.target.value, input)} />
                </div>
            ))}
            <button type="submit">Add Student</button>
        </form>
    );
};

export default Form;
