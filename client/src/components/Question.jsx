import React from 'react';
import AnswerList from './AnswerList.jsx'
import axios from 'axios';
import Answer from './Answer.jsx';
import styled, { css } from 'styled-components';
import FollowModal from './FollowModal.jsx';
import AnswerQuestion from './AnswerQuestion.jsx';

const Head = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  img {
    border-radius: 100%;
  };
  p {
    font-family: Poppins;
    font-size: 12px;
  };
  .username {
    font-weight: 600;
  }

  .info {
    font-size: 12px;
    color: #8c8c8c;
  }

  input {
    width: 800px;
    margin-left: 20px;
  }

  .question {
    font-size: 16px;
    line-height: 20px;
    font-family: Poppins;
  }

  .contributions {
    font-weight: 800;
  }

  .modal {
    float: right;
    font-size: 24px;
    font-weight: 800
  }
  background-color: white;
`
const Header = styled.div`
  display: inline-block;
  margin-left: 10px;
`

const Username = styled.div`
  font-weight: 700;
`

const Modal = styled.div`
  float: right;
`
const Form = styled.form`
  padding-left: 20px;
  display: inline;
`


const Question = (props) => (
  <Head>
    <img width="50" height="50" src={props.question.profilePic}></img>
    <button onClick={props.toggleFollow} className="modal" name={props.question.id}>...</button>
    <Modal>
      {props.showFollow
      ? <FollowModal />
      : <section></section>
      }
    </Modal>

    <Header>
      <p><span className="username">{props.question.username}</span> asked a question {props.question.date}<br></br></p>
      <span className="info"><img src="https://img.icons8.com/android/12/000000/marker.png"/> {props.question.location} • <span className="contributions">{props.question.contributions}</span> Contributions • <span className="contributions">{props.question.votes}</span> helpful votes</span>
    </Header>
    <p className="question">{props.question.text}</p>
    {Object.keys(props.answers).length > 0
      ? <AnswerList questionID={props.question.id} mostVotedAnswer={props.mostVotedAnswer[props.question.id]} showAllAnswers={props.showAllAnswers} showAll={props.showAll} answers={props.answers[props.question.id]}/>
      : <form>
          <input></input>
          <button>Answer Question!</button>
        </form>}
    <Form>
      <img src="https://img.icons8.com/fluent-systems-regular/24/000000/user-male-circle.png"/>
      <input name={props.question.id} placeholder="Answer Question" onChange={props.changeAnswer} onClick={props.toggleAnswerModal}></input>
      {props.showAnswerModal
      ? <AnswerQuestion addAnswer={props.addAnswer} question={props.question.id} attraction={{title: "Winchester Mystery House"}}/>
      : <p></p>}
    </Form>
  </Head>
)

export default Question;