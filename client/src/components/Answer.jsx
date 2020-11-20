import React from 'react';
import styled, { css } from 'styled-components';

const Head = styled.div`
  display: inline-block;
  margin: 0 1em;
  padding: 16px 24px 12px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
  .username {
    font-weight: 600;
  }
  .answer {
    color: #8c8c8c;
    padding-left: 35px;
    font-size: 14px;
    line-height: 18px;
  }
  .rotate {
    -webkit-transform:rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .username {
    font-weight: 800;
    font-size: 12px;
  }
  padding: 10px;
  width: 800px;
`
const Votes = styled.div`
  display: inline-block;
  .totalVotes {
    font-size: 12px;
    font-weight: 700;
    margin: 10px;
  }

`

const Header = styled.div`
  display: inline-block;
  margin-left: 10px;
  .answermodal {
    font-size: 20px;
    font-weight: 800;
  }
`


const Answer = (props) => (
  <Head>
    <Votes>
      <img width="30" height="30" src={props.answer.profilePic}></img>
    </Votes>
    <Header>
      <p>Answer from <span className="username">{props.answer.username}</span><br></br>{props.answer.date} | <button className="answermodal">...</button></p>
      <p></p>
    </Header>
      <p className="answer">{props.answer.text}</p>
    <Votes>
      <button onClick={props.changeVote} name={props.answer.id} id={"decrease"}className="increase"><img id={"increase"} name={props.answer.id} width="15" height="15" src="https://img.icons8.com/cotton/64/000000/thumb-up--v1.png"/></button>
    </Votes>
    <Votes>
      <p className="totalVotes"><span>{props.answer.votes} votes</span></p>
    </Votes>
    <Votes>
      <button onClick={props.changeVote} name={props.answer.id} id={"decrease"}className="decrease"><img name={props.answer.id} id={"decrease"} className="rotate" width="15" height="15" src="https://img.icons8.com/cotton/64/000000/thumb-up--v1.png"/></button>
    </Votes>
  </Head>

)

export default Answer;