import styled from "styled-components"

const TotalScore = ({score}) => {
    return (
    <TotalScoreContainer >
        <h1>{score}</h1>
        <p>Total Score</p>
    </TotalScoreContainer>
    )
}

export default TotalScore

const TotalScoreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    h1{
        font-family: Poppins;
        font-size: 100px;
        font-weight: 500;
        line-height: 100px;
        text-align: left;
    }
    p{
        font-family: Poppins;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        text-align: left;

    }
`;