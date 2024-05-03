import { useState } from "react";
import styled from "styled-components";
const SelectNumber = ({selectedBox, SetSelectedBox, setError, error}) => {
    const arr = [1,2,3,4,5,6];

    const handleError = (val) =>{
        SetSelectedBox(val);
        setError("")
    }
    return (
        <SelectContainer>
            <p>{error}</p>
            <BoxContainer>
            {arr.map((val,i)=>{
                return  <Box key={i}
                onClick={()=>handleError(val)} isselected={val===selectedBox}>{val}</Box>
            }
            )}
            </BoxContainer>
            <h1>Select Number</h1>
        </SelectContainer>
    )
}

export default SelectNumber

const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px){
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
    }
`;

const Box = styled.div`
    width: 72px;
    height: 72px;
    gap: 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    background: #FFFFFF;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    @media (max-width: 800px){
        width: 80%;
        align-items: center;
    }
    cursor: pointer;
    background-color: ${(props) => (props.isselected? "black": "white")};
    color: ${(props) => (props.isselected ? "white" : "black")};
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 800px){
        align-items: center;
        margin-top: 40px;
        width: 100%;
    }
    h1{
        white-space: nowrap;
    }
    p{
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        line-height: 36px;
        text-align: left;
        color: #FF0C0C;


    }
`;
