import React from 'react';
import Question from './Question.jsx';
import styled, { css } from 'styled-components';



const QuestionList = (props) => (
  <div>
    <form>
      <input></input>
      <button>Ask Question!</button>
    </form>
    <ul>
      {props.questions.length > 0
      ? props.questions.map(question =>
        <Question mostVotedAnswer={props.mostVoted} showAllAnswers={props.showAllAnswers} showAll={props.showAll} answers={props.answers} question={question}/>)
      : <h4>Nothing</h4>
    }
    </ul>
  </div>
)

export default QuestionList;