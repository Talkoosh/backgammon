import { createContext, useState } from 'react';

export const BackgammonContext = createContext('');

export const BackgammonContextProvider = ({ children }) => {
    const [board, setBoard] = useState(getInitialBoardData());
    const [currentPlayerTurn, setCurrentPlayerTurn] = useState('white');
    const [eatenPieces, setEatenPieces] = useState({});
    const [diceResults, setDiceResults] = useState({});

    return <BackgammonContext.Provider value={{ board, setBoard, currentPlayerTurn, setCurrentPlayerTurn, eatenPieces, setEatenPieces, diceResults, setDiceResults }}>{...children}</BackgammonContext.Provider>;
};

const getInitialBoardData = () => {
    const initialData = [
        [{ type: 'white', amount: 5 }, {}, {}, {}, { type: 'black', amount: 3 }, {}, { type: 'black', amount: 5 }, {}, {}, {}, {}, { type: 'white', amount: 2 }],
        [{ type: 'black', amount: 5 }, {}, {}, {}, { type: 'white', amount: 3 }, {}, { type: 'white', amount: 5 }, {}, {}, {}, {}, { type: 'black', amount: 2 }],
    ];
    return initialData;
};
