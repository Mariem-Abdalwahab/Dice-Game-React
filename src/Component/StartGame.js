import styled from "styled-components";

import Button from "./styled/Button";
function StartGame({toggle}){
    return(
        <>
            <Container>
                <div className="divimg">
                    <img src="./imgs/dices1.png"></img>
                </div>
                <div className="divH1">
                    <h1>Dice Game</h1>
                    <Button onClick={toggle}>Play Now</Button>
                </div>
            </Container>
        </>
    );
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* padding: 0 15px; */
    margin: 0 auto;
    .divimg{
        @media(max-width: 1040px){
            width: 100%;
            align-items: center;
            justify-content: center;
            display: flex;
            text-align: center;
    }
    }
    img{
        width: 500px;
        height: 500px;
        gap: 0px;
        opacity: 0px;
        object-fit: contain;
        @media(max-width: 1040px){
            width: 85%;
        
    }
    }
    h1{
        font-size: 8vw;
        white-space: nowrap;
    }
    .divH1{
        @media(max-width: 575px){
            width: 100%;
        }
    }
    @media(max-width: 1040px){
       flex-direction: column;
       text-align: start;
        h1{
                align-items: start;
            }
    }

    @media(max-width: 575px){
       width: 80%;
    }
`;



