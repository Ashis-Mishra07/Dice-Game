import TotalScore from "./TotalScore";
import NumberSelector from"./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutLineBUtton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay=()=>{
    const [score,setScore]=useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError]=useState("");
    const [showRules,setShowRules]=useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number !");
            return;
        };
        setError("");
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if(selectedNumber===randomNumber){
            setScore(prev =>prev+randomNumber);
        }
        else{
            setScore(prev => prev-2);
        }


        setSelectedNumber(undefined);

    };

    const reset=()=>{
        setScore(0);
    }

    return(
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice}/>
            <div className="btns">
                <OutLineBUtton onClick={reset}>Reset</OutLineBUtton>
                <Button onClick={() => setShowRules(prev => !prev)}>{showRules ? "Hide" : "Show "} Rules &nbsp;  &#8691; </Button>
            </div>
            {showRules && <Rules />}
            
        </MainContainer>
    )
}
export default GamePlay;

const MainContainer =styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
        
    }
    .btns{
        margin-top: 40px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }
`