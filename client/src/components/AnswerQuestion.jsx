import React from 'react';
import AnswerList from './AnswerList.jsx'
import axios from 'axios';
import styled, { css } from 'styled-components';

const Section = styled.div`
  button {
    display: block;
  }
  display: block;
`

const AnswerQuestion = (props) => (
  <div>
    <h3>Get quick answers from {props.attraction.title}</h3>
    <form>
      <input defaultValue="Hi, what would you like to know about this attraction?"></input>
      <span>Note: your question will be posted publicly on the Questions & Answers page.</span>
      <button>Submit</button>
      <button>Cancel</button>
    </form>
  </div>
)


export default AnswerQuestion;