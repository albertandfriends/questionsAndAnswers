import React from 'react';
import Question from './Question.jsx';
import styled, { css } from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  margin-right: 30px;
`

const QuestionList = (props) => (
  <List>
    <ul>
      {props.questions.length > 0
      ? props.questions.map(question =>
        <Question showAnswerModal = {props.showAnswerModal[question.id]} toggleFollow = {props.toggleFollow} showFollow = {props.showFollow[question.id]} mostVotedAnswer={props.mostVoted} showAllAnswers={props.showAllAnswers} showAll={props.showAll} answers={props.answers} question={question}/>)
      : <h4>Nothing</h4>
    }
    </ul>
  </List>
)

export default QuestionList;