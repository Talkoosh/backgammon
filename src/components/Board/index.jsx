import { useRef, useState } from 'react';
import styles from './board.module.css';
export const Board = () => {
    const [boardData, setBoardData] = useState(getInitialBoardData());
    const triangleHeight = Math.floor(window.innerHeight / 3);
    console.log('🚀 ~ file: index.jsx:6 ~ Board ~ triangleHeight:', triangleHeight);

    return (
        <div className={styles.container}>
            <div className={styles.middleBar}></div>
            {boardData.map((row, rowIndex) => (
                <div className={styles.row} key={Math.random(0, 200)}>
                    {row.map((triangle, triangleIndex) => (
                        <>
                            <span
                                style={rowIndex === 0 ? { borderTopWidth: triangleHeight } : { borderBottomWidth: triangleHeight }}
                                key={Math.random(0, 200)}
                                className={`${rowIndex === 0 ? styles.triangleDown : styles.triangleUp} ${styles.triangle}`}
                            ></span>
                            {triangleIndex === 5 ? <span className={styles.empty}></span> : ''}
                        </>
                    ))}
                </div>
            ))}
        </div>
    );
};

const getInitialBoardData = () => {
    const initialData = [[], []];
    for (let i = 0; i < 2; i++) {
        for (let k = 0; k < 12; k++) {
            initialData[i][k] = null;
        }
    }
    return initialData;
};
