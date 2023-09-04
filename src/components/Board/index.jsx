import React, { useState } from 'react';
import styles from './board.module.css';
export const Board = () => {
    const [boardData, setBoardData] = useState(getInitialBoardData());

    return (
        <div className={styles.container}>
            {boardData.map((row, index) => (
                <div className={styles.row} key={Math.random(0, 200)}>
                    {row.map((triangle) => (
                        <span key={Math.random(0, 200)} className={index === 0 ? styles.triangleDown : styles.triangleUp}></span>
                    ))}
                </div>
            ))}
        </div>
    );
};

const getInitialBoardData = () => {
    const initialData = [[], []];
    for (let i = 0; i < 2; i++) {
        for (let k = 0; k < 6; k++) {
            initialData[i][k] = null;
        }
    }
    return initialData;
};
