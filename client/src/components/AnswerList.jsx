import React from 'react';
import Answer from './Answer.jsx';
import styled, { css } from 'styled-components';


const Show = styled.button`
  cursor: pointer;
`

const List = styled.div`
  button .top {
    font-weight: 800;
    font-size: 14px;

  }
`

const AnswerList = (props) => (
  <List>
    <ul>
      {props.showAllAnswers === false
      ? props.mostVotedAnswer ? <Answer answer={props.mostVotedAnswer} /> : <h5>No Answers For This Question</h5>
      : (props.answers
      ? props.answers.map(answer =>
        <Answer answer={answer}/>)
      : <h5>No Answers For This Question</h5>
      )}
    </ul>
      {props.showAllAnswers
      ? <button className="top" name={props.questionID} onClick={props.showAll}>Show top answer</button>
      : <button className="top" name={props.questionID} onClick={props.showAll}>Show all answers</button>}

  </List>

)

export default AnswerList;