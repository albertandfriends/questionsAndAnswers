import React from 'react';
import AnswerList from './AnswerList.jsx'
import axios from 'axios';
import Answer from './Answer.jsx';
import styled, { css } from 'styled-components';

const Head = styled.div`
  display: block;
  border-radius: 3px;
  border: 1px solid gray;
  margin: 0 1em;
  padding: 10px;
  background-color: white;
  width: 900px;
`
const Header = styled.div`
  display: inline-block;
  padding: 10px;
`

const Username = styled.div`
  font-weight: bold;
`


const Question = (props) => (
  <Head>
    <Header>
      <img width="50" height="50" src={props.question.profilePic}></img>
    </Header>
    <Header>
      <p><Username>{props.question.username}</Username> asked a question</p>
    </Header>
    <div>
      <Header>
        <p>Location: {props.question.location}</p>
      </Header>
      <Header>
        <p>Contributions: {props.question.contributions}</p>
      </Header>
    </div>

    <p>{props.question.text}</p>
    {Object.keys(props.answers).length > 0
      ? <AnswerList questionID={props.question.id} mostVotedAnswer={props.mostVotedAnswer[props.question.id]} showAllAnswers={props.showAllAnswers} showAll={props.showAll} answers={props.answers[props.question.id]}/>
      : <form>
          <input></input>
          <button>Answer Question!</button>
        </form>}
  </Head>
)

export default Question;