import React from 'react';
import AnswerList from './AnswerList.jsx'
import axios from 'axios';
import styled, { css } from 'styled-components';

const Section = styled.div`
  button {
    display: flex;

  }
  span {
    display: block;
  }
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  input {
    width: 900px;
    height: 100px;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
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

const AskQuestion = (props) => (
  <Section>
    <div className="modal-content">
      <h3>Get quick answers from {props.attraction.title} staff and past guests.</h3>
      <form>
        <input onChange={props.changeQuestion} placeholder="Hi, what would you like to know about this attraction?"></input>
        <span>Note: your question will be posted publicly on the Questions & Answers page.</span>
        <button>Posting Guidelines</button>
        <Submit>
          <button className="submit" onClick={props.addQuestion}>Submit</button>
          <button className="cancel">Cancel</button>
        </Submit>
      </form>
    </div>
  </Section>
)


export default AskQuestion;