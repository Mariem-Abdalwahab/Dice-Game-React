import styled from "styled-components";
import { useState } from "react";

import SelectNumber from "./SelectNumber";
import TotalScore from "./TotalScore";
import  RollDice  from "./RollDice";
import Button from "./styled/Button";
import { OutlineButton } from "./styled/Button";
import Rules from "./Rules";

function GamePlay(){
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [diceSelect, setDiceSelect] = useState(4);
    const [selectedBox, SetSelectedBox] = useState(0);
    const [ShowRules, SetShowRules] = useState(false);

    const reset = () =>{
        setScore(0);
    }

    const randomNum = (min, max) =>{
        return Math.floor(Math.random() * (max-min) + min);
    }
    const roll = () =>{
        const num = randomNum(1,7);
        console.log(num);
        setDiceSelect(num);

        if(selectedBox == 0) {
            setError("You have not selected any number");
            return;
        }
        setError("");
        if(num === selectedBox){
            setScore(prev =>  prev + num) ;
        }else{
            setScore(prev => prev - 2) ;
        }
        SetSelectedBox(0);
    }

    return(
        <>
            <MainContainer >
                <TotalScore score={score}/>
                <SelectNumber setError = {setError} selectedBox = {selectedBox} SetSelectedBox ={SetSelectedBox } error ={error}/>
            </MainContainer>
            <RollDice diceSelect = {diceSelect} roll = {roll}/>
            <Btns >
                <OutlineButton
                onClick={reset}
                >Reset</OutlineButton>
                <Button onClick={() => SetShowRules(prev => !prev)}>Show Rules</Button>
            </Btns>
            {ShowRules && <Rules></Rules>}
            
            
                
            
        </>
    );
}

const MainContainer  =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 60px;
    @media(max-width:800px){
        flex-direction: column;
        /* width: 80%; */
    }

`;

const Btns  =styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default GamePlay;