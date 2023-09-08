import { useContext, useState } from 'react';
import styles from './board.module.css';
import { Triangle } from '../Triangle';
import { BackgammonContext } from '../../context/backgammonContext';

export const Board = () => {
    const { board, setBoard } = useContext(BackgammonContext);

    return (
        <div className={styles.container}>
            <div className={styles.middleBar}></div>
            {board.map((row, rowIndex) => (
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
