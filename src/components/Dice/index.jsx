import { useState } from 'react';
import diceOne from '../../assets/inverted-dice-1.svg';
import diceTwo from '../../assets/inverted-dice-2.svg';
import diceThree from '../../assets/inverted-dice-3.svg';
import diceFour from '../../assets/inverted-dice-4.svg';
import diceFive from '../../assets/inverted-dice-5.svg';
import diceSix from '../../assets/inverted-dice-6.svg';

export const Dice = () => {
    const [resultOne, setResultOne] = useState(generateRandomDiceResult());
    const [resultTwo, setResultTwo] = useState(generateRandomDiceResult());

    return (
        <div
            onClick={() => {
                setResultOne(generateRandomDiceResult());
                setResultTwo(generateRandomDiceResult());
            }}
        >
            <img style={{ width: '40px', height: '40px' }} src={getDiceSvg(resultOne)} alt="" />
            <img style={{ width: '40px', height: '40px' }} src={getDiceSvg(resultTwo)} alt="" />
        </div>
    );
};

const getDiceSvg = (number) => {
    switch (number) {
        case 1:
            return diceOne;
        case 2:
            return diceTwo;
        case 3:
            return diceThree;
        case 4:
            return diceFour;
        case 5:
            return diceFive;
        case 6:
            return diceSix;
    }
};

const generateRandomDiceResult = () => {
    return Math.floor(Math.random() * 6 + 1);
};
