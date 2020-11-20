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

const Submit = styled.div`
  .submit {
    display: inline;
    top: 0px;
    right: 0px;
    padding: 8px 16px;
    font-weight: 700;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 2px;
    background-clip: padding-box;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
    border-color: #000;
    border-radius: 3px;
    background-color: #000;
    color: #fff;
  }
  .cancel {
    display: inline;
    top: 0px;
    right: 0px;
    padding: 8px 16px;
    font-weight: 700;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 2px;
    background-clip: padding-box;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
    border-color: #000;
    border-radius: 3px;
    background-color: #fff;
    color: #000;
  }
`

const AnswerQuestion = (props) => (
  <div>
    <form>
      <h3>Get quick answers from {props.attraction.title} staff and past guests.</h3>
      <Submit>
        <button className="submit" name={props.question} onClick={props.addAnswer}>Submit</button>
        <button className="cancel">Cancel</button>
      </Submit>
    </form>
  </div>
)


export default AnswerQuestion;