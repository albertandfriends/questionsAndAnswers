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
    <form>
      <h3>Get quick answers from {props.attraction.title} staff and past guests.</h3>
      <button name={props.question} onClick={props.addAnswer}>Submit</button>
      <button>Cancel</button>
    </form>
  </div>
)


export default AnswerQuestion;