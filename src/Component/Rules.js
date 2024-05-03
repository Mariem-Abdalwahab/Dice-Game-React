
import styled from "styled-components";
const Rules = () => {
  return (
    <RulesConstiner>
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RulesConstiner>
  )
}

export default Rules

const RulesConstiner = styled.div`
    background-color: #FBF1F1;
    padding: 10px;
    max-width: 795px;
    margin: 25px auto;
    h1{
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        text-align: left;
    }
    p{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
}
`;