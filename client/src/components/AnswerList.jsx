import React from 'react';
import Answer from './Answer.jsx';
import styled, { css } from 'styled-components';


const Show = styled.p`
  cursor: pointer;
`

const List = styled.div`
  span {
    font-weight: 800;
    font-size: 14px;
  }
`

const AnswerList = (props) => (
  <List>
    <ul>
      {props.showAllAnswers === false
      ? props.mostVotedAnswer ? <Answer answer={props.mostVotedAnswer} /> : <h5>Loading...</h5>
      : props.answers.map(answer =>
        <Answer answer={answer}/>
      )}
    </ul>
      {props.showAllAnswers
      ? <Show id={props.questionID} onClick={props.showAll}><span>Show top answer</span></Show>
      : <Show id={props.questionID} onClick={props.showAll}><span>Show all answers</span></Show>}

  </List>

)

export default AnswerList;