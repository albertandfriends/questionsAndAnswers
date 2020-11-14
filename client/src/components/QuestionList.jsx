import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => (
  <div>
    <h3>Questions</h3>
    <form>
      <input></input>
      <button>Ask Question!</button>
    </form>
    <ul>
      {props.questions.map(question =>
        <Question question={question}/>
      )}
    </ul>
  </div>
)

export default QuestionList;