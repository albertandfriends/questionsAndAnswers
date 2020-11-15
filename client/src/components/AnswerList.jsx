import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = (props) => (
  <div>
    <ul>
      {props.showAllAnswers === false
      ? props.mostVotedAnswer ? <Answer answer={props.mostVotedAnswer} /> : <h3>No Answers Yet! Add answers below :)</h3>
      : props.answers.map(answer =>
        <Answer answer={answer}/>
      )}
    </ul>
      {props.showAllAnswers
      ? <button onClick={props.showAll}>Show top answer</button>
      : <button onClick={props.showAll}>Show all answers</button>}

    <form>
      <input></input>
      <button>Answer Question!</button>
    </form>
  </div>
)

export default AnswerList;