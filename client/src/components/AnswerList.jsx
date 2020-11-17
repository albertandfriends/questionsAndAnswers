import React from 'react';
import Answer from './Answer.jsx';
import styled, { css } from 'styled-components';

const Form = styled.form`
  padding: 20px;
`
const Show = styled.p`
  cursor: pointer;

`

const AnswerList = (props) => (
  <div>
    <ul>
      {props.showAllAnswers === false
      ? props.mostVotedAnswer ? <Answer answer={props.mostVotedAnswer} /> : <h5>Loading...</h5>
      : props.answers.map(answer =>
        <Answer answer={answer}/>
      )}
    </ul>
      {props.showAllAnswers
      ? <Show id={props.questionID} onClick={props.showAll}>Show top answer</Show>
      : <Show id={props.questionID} onClick={props.showAll}>Show all answers</Show>}

    <Form>
      <input></input>
      <button>Answer Question!</button>
    </Form>
  </div>

)

export default AnswerList;