import React, { useState , useEffect } from "react";

import './styles/header_text_update.css';

const HeaderText = ({myHeaders}) => {
    console.log("Render Header Text");

    const period = 1000;
    const delta = 100;
    const [loopNumber, getLoopNumber] = useState(0);
    const [isWordDeleted, checkIsWordDeleted] = useState(false);
    const [word, getWord] = useState('');
    const [deltaValue, getDelta] = useState(delta - Math.random() * 100);

    const updateWord = () => {
        let wordPosition = loopNumber % myHeaders.length;
        let getText = myHeaders[wordPosition];
        let updateWord = isWordDeleted ? getText.substring(0, word.length - 1) : getText.substring(0, word.length + 1);
        console.log('Delata Value: ', deltaValue);

        getWord(updateWord);
        if (isWordDeleted) {
            getDelta(previousDelta => previousDelta / 2);
        } 
        if (!isWordDeleted && getText === updateWord) {
            checkIsWordDeleted(true);
            getDelta(period);
        } else if (isWordDeleted && updateWord === "") {
            checkIsWordDeleted(false);
            getLoopNumber(loopNumber + 1);
            getDelta(delta - Math.random() * 100);
        }
    }

    useEffect(() => {
        let updateText = setInterval(() => {
            updateWord()
        }, deltaValue);
        return () => {
            clearInterval(updateText);
        }
    }, [word]);

    return (
        <h1 className=" headerText absolute w-max top-[390px] text-[48px] tracking-[13px] font-light ">Hi! I'm {word}</h1>
    )
}

export default HeaderText;