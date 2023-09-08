import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { Dice } from './components/Dice';
import { BackgammonContextProvider } from './context/backgammonContext';

function App() {
    const [diceResults, setDiceResults] = useState(null);
    return (
        <>
            <BackgammonContextProvider>
                <Dice setDiceResults={setDiceResults}></Dice>
                <Board diceResults={diceResults}></Board>
            </BackgammonContextProvider>
        </>
    );
}

export default App;
