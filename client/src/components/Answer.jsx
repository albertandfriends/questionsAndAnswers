import React from 'react';
import styled, { css } from 'styled-components';

const Head = styled.div`
  display: inline-block;
  border: .1px solid gray;
  margin: 0 1em;
  padding: 10px;
  width: 800px;
`
const Votes = styled.div`
  display: inline-block;
  padding: 10px;
`

const Answer = (props) => (
  <Head>
    <Votes>
      <img width="30" height="30" src={props.answer.profilePic}></img>
    </Votes>
    <Votes>
      <h5>Answer from {props.answer.username}</h5>
    </Votes>
    <p>{props.answer.text}</p>
    <Votes>
      <button>+</button>
    </Votes>
    <Votes>
      <p>{props.answer.votes} votes</p>
    </Votes>
    <Votes>
      <button>-</button>
    </Votes>
  </Head>
)

export default Answer;