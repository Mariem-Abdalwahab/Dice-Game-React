import styled from "styled-components";

const Button = styled.button`
    width: 144px;
    height: 42px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 3px;
    cursor: pointer;
    font-size: 15px;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s all ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    margin-bottom: 12px;

    &:hover{
        background-color: black;
        color: white;
    }
`;

export default Button;