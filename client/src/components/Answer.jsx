import React from 'react';

const Answer = (props) => (
  <div>
    <h3>Answer from {props.answer.username}: </h3>
    <p>{props.answer.text}</p>
  </div>
)

export default Answer;