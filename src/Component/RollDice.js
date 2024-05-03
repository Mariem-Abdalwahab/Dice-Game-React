import { useState } from "react";
import styled from "styled-components";



const RollDice = ({roll, diceSelect}) => {


  return (
    <>
        <DiceContainer>
            <div className="diceimg" onClick={roll}>
                <img src={`./imgs/dice_${diceSelect}.png`} alt="img"></img>
            </div>
            <h4>Click on Dice to roll</h4>
        </DiceContainer>
    </>
  )
}

export default RollDice;

const DiceContainer  =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    .diceimg{
        cursor: pointer;
    }
    h4{
        font-family: Poppins;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        text-align: left;

    }
`;
