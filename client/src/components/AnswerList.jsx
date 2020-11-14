import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = (props) => (
  <div>
    <ul>
      {props.answers.map(answer =>
        <Answer answer={answer}/>
      )}
    </ul>
    <form>
      <input></input>
      <button>Answer Question!</button>
    </form>
  </div>
)

export default AnswerList;