import { useContext, useEffect, useState } from 'react';
import styles from './board.module.css';
import { Triangle } from '../Triangle';
import { BackgammonContext } from '../../context/backgammonContext';

export const Board = () => {
    const { board, setBoard, currentPlayerTurn } = useContext(BackgammonContext);
    const [selectedPosition, setSelectedPosition] = useState(null);

    useEffect(() => {
        if (!selectedPosition) return;
        const { rowIndex, triangleIndex } = selectedPosition;
        if (!rowIndex || !triangleIndex) {
            if (rowIndex !== 0 && triangleIndex !== 0) {
                return;
            }
        }
        if (board[rowIndex][triangleIndex].type !== currentPlayerTurn) {
            console.log('CANT MOVE FROM HERE');
            //TODO: Add logic for when choosing illegal position
        }
    }, [selectedPosition]);

    return (
        <div className={styles.container}>
            <div className={styles.middleBar}></div>
            {board.map((row, rowIndex) => (
                <div className={styles.row} key={Math.random(0, 200)}>
                    {row.map((triangle, triangleIndex) => (
                        <>
                            <Triangle setSelectedPosition={setSelectedPosition} triangleIndex={triangleIndex} triangle={triangle} rowIndex={rowIndex}></Triangle>
                            {triangleIndex === 5 ? <span className={styles.empty}></span> : ''}
                        </>
                    ))}
                </div>
            ))}
        </div>
    );
};
