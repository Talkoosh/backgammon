import { useState } from 'react';
import styles from './board.module.css';
import { Triangle } from '../Triangle';

export const Board = () => {
    const [boardData, setBoardData] = useState(getInitialBoardData());

    return (
        <div className={styles.container}>
            <div className={styles.middleBar}></div>
            {boardData.map((row, rowIndex) => (
                <div className={styles.row} key={Math.random(0, 200)}>
                    {row.map((triangle, triangleIndex) => (
                        <>
                            <Triangle triangle={triangle} rowIndex={rowIndex}></Triangle>
                            {triangleIndex === 5 ? <span className={styles.empty}></span> : ''}
                        </>
                    ))}
                </div>
            ))}
        </div>
    );
};

const getInitialBoardData = () => {
    const initialData = [
        [{ type: 'white', amount: 5 }, {}, {}, {}, { type: 'black', amount: 3 }, {}, { type: 'black', amount: 5 }, {}, {}, {}, {}, { type: 'white', amount: 2 }],
        [{ type: 'black', amount: 5 }, {}, {}, {}, { type: 'white', amount: 3 }, {}, { type: 'white', amount: 5 }, {}, {}, {}, {}, { type: 'black', amount: 2 }],
    ];
    return initialData;
};
