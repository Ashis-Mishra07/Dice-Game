import styled from "styled-components"

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play Dice Game !</h2>
            <div className="text">
                <p> i.&nbsp; Select any number</p>
                <p> ii.&nbsp;Click on dice image</p>
                <p>iii.&nbsp;Other click on dice if selected number is equal to dice number you will get some points on dice</p>
                <p>iv.&nbsp;If you get wrong guess then 2 points will be deducted</p>
            </div>
        </RulesContainer>
    )
}
export default Rules

const RulesContainer = styled.div`
background-color: #aba6a6;
padding: 20px;
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size: 24px;
    font-weight: bold;
}
.text{
    margin-top: 24px;
    line-height: 40px;
}

`;