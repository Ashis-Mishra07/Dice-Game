
import styled from "styled-components";

export const Button = styled.button`
color: white;
padding: 10px 18px;
gap: 10px;

min-width: 220px;
height: 44px;

background: #000000;
border-radius: 5px;
border: none;
font-size: 16px;
border: 2px solid transparent;
transition:  0.4s background-color ease-in;

&:hover{
    background-color: white;
    border: 2px solid black;
    color: black;
    transition:  0.3s background-color ease-in;
    cursor: pointer;
}
`;

export const OutLineBUtton =styled(Button)`
background-color: white;
border: 2px solid black;
color: black;
&:hover{
    background-color: black;
    border: 2px solid transparent;
    color: white;
    transition:  0.3s background-color ease-in;
    cursor: pointer;
}

`;