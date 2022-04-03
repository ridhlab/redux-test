import React, { useState, useEffect } from "react";
/** Styles */
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";

import { removeStudent } from "../../store/students";

const Table = () => {
    const { students } = useSelector((state) => state.students);
    const dispatch = useDispatch();
    console.log(students);
    return (
        <table className={styles.table}>
            <tr>
                <th>Name</th>
                <th>Faculty</th>
                <th>Semester</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {students.map((student, studentIdx) => (
                <tr key={studentIdx}>
                    <td>{student.name}</td>
                    <td>{student.faculty}</td>
                    <td>{student.semester}</td>
                    <td>{student.email}</td>
                    <td className={styles.deleteText} onClick={() => dispatch(removeStudent({ id: student.id }))}>
                        Delete
                    </td>
                </tr>
            ))}
        </table>
    );
};

export default Table;
