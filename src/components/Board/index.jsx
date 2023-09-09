import { useContext, useEffect, useState } from 'react';
import styles from './board.module.css';
import { Triangle } from '../Triangle';
import { BackgammonContext } from '../../context/backgammonContext';

export const Board = () => {
    const { board, setBoard, currentPlayerTurn } = useContext(BackgammonContext);
    const [moveFrom, setMoveFrom] = useState(null);
    const [moveTo, setMoveTo] = useState(null);

    useEffect(() => {
        if (!moveFrom) return;
        const { rowIndex, triangleIndex } = moveFrom;
        if (!rowIndex || !triangleIndex) {
            if (rowIndex !== 0 && triangleIndex !== 0) {
                return;
            }
        }
        if (board[rowIndex][triangleIndex].type !== currentPlayerTurn) {
            console.log('CANT MOVE FROM HERE');
            setMoveFrom(null);
            //TODO: Add logic for when choosing illegal position
        }
    }, [moveFrom]);

    useEffect(() => {
        if (!moveTo) return;
        //TODO: Add dice validation
        const { rowIndex, triangleIndex } = moveTo;
        const selectedPosition = board[rowIndex][triangleIndex];
        if (selectedPosition.amount > 1 && selectedPosition.type !== currentPlayerTurn) {
            console.log('CANT MOVE HERE');
            return;
            //TODO: Add logic for when trying to move to illegal position
        } else {
            //TODO: Add logic for eating a piece
            const updatedBoard = [...board];
            updatedBoard[moveFrom.rowIndex][moveFrom.triangleIndex].amount -= 1;
            updatedBoard[rowIndex][triangleIndex].amount += 1;
            updatedBoard[rowIndex][triangleIndex].type += currentPlayerTurn;
            setBoard(updatedBoard);
        }
    }, [moveTo]);

    return (
        <div className={styles.container}>
            <div className={styles.middleBar}></div>
            {board.map((row, rowIndex) => (
                <div className={styles.row} key={Math.random(0, 200)}>
                    {row.map((triangle, triangleIndex) => (
                        <>
                            <Triangle setMoveFrom={setMoveFrom} moveFrom={moveFrom} setMoveTo={setMoveTo} triangleIndex={triangleIndex} triangle={triangle} rowIndex={rowIndex}></Triangle>
                            {triangleIndex === 5 ? <span className={styles.empty}></span> : ''}
                        </>
                    ))}
                </div>
            ))}
        </div>
    );
};
