import React from 'react';

const Answer = (props) => (
  <div>
    <h5>Answer from {props.answer.username}: </h5>
    <p>{props.answer.text}</p>
    <div>
      <button>+</button>
      <p>{props.answer.votes} votes</p>
      <button>-</button>
    </div>
  </div>
)

export default Answer;