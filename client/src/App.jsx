import React from 'react';
import axios from 'axios';
import QuestionList from './components/QuestionList.jsx';
import AskQuestion from './components/AskQuestion.jsx';
import styled, { css } from 'styled-components';

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  border: 1px solid gray;
  margin: 20px;
  padding: 10px;
  background-color: white;
  width: 900px;
  form {
    float:right;
  }
  .description {
    font-weight: 800
  }
  button {
    font-size: 24px;
    font-weight: 800;
  }
  .questionButton {
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
  .answerModalButton {
    padding: 8px 8px;
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
    z-index: 1;
  }
`

const Buttons = styled.div`
  border: 1px solid gray;
  margin: 20px;
  padding: 10px;
  background-color: white;
  width: 900px;
  text-align: center;
  .buttonNames {
    font-size: 24px;
    font-weight: 800;
  }
  .previous {
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
    float: left;
  }
  .next {
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
    float: right;
  }
`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      pageLimit: 5,
      pages: [],
      answers: {},
      showAllAnswers: false,
      mostVoted: {},
      showFollow: {},
      showAnswerModal: {},
      showGuidelines: false,
      askQuestion: false,
      currentPage: 1
    }

    this.getQuestionsAndAnswers = this.getQuestionsAndAnswers.bind(this);
    this.changePage = this.changePage.bind(this);
    this.showAll = this.showAll.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.showAnswerModal = this.showAnswerModal.bind(this);
    this.nextOrPrevious = this.nextOrPrevious.bind(this);
  }

  showAll(event) {
    this.setState({
      showAllAnswers: !this.state.showAllAnswers
    })
  }

  showAnswerModal(event) {
    var newAnswerModalObject = this.state.showAnswerModal;
    newAnswerModalObject[event.target.name] = !newAnswerModalObject[event.target.name]
    this.setState({
      showAnswerModal: newAnswerModalObject
    })
  }

  toggleFollow(event) {
    var newFollowObject = this.state.showFollow;
    newFollowObject[event.target.name] = !newFollowObject[event.target.name]
    this.setState({
      showFollow: newFollowObject
    })
  }

  nextOrPrevious(event) {
    if (event.target.name === "previous") {
      if (this.state.currentPage > 1) {
        this.getQuestionsAndAnswers(this.state.currentPage - 1);
      }
    } else {
      if (this.state.currentPage < this.state.pages.length) {
        this.getQuestionsAndAnswers(this.state.currentPage + 1);
      }
    }
  }

  changePage(event) {
    this.getQuestionsAndAnswers(event.target.innerHTML);
  }

  getQuestionsAndAnswers(event) {
    if (event !== undefined) {
      var idStartPoint = 1 + (this.state.pageLimit * (Number(event) - 1));
    } else {
      var idStartPoint = 1;
    }
    axios.get("/api/questions", {
      params: {
        start: idStartPoint,
        end: idStartPoint + (this.state.pageLimit - 1),
      }
    })
    .then((result) => {
      this.setState({
        questions: result.data,
        currentPage: Number(event)
      })
      for (var i = 0; i < this.state.questions.length; i++) {
        axios.get("/api/answers", {
          params: {
            questionID: this.state.questions[i].id
          }
        })
        .then((result) => {
          var newAnswers = this.state.answers;
          newAnswers[result.data.answers[0].questionsID] = result.data.answers;
          var mostVotedObject = this.state.mostVoted;
          mostVotedObject[result.data.answers[0].questionsID] = result.data.mostVoted
          var showFollowObject = this.state.showFollow;
          showFollowObject[result.data.answers[0].questionsID] = false;
          var showAnswerModalObject = this.state.showAnswerModal;
          showAnswerModalObject[result.data.answers[0].questionsID] = false;
          this.setState({
            answers: newAnswers,
            mostVoted: mostVotedObject,
            // showAllAnswers: showAllObject
            showFollow: showFollowObject,
            showAnswerModal: showAnswerModalObject
          })
        })
      }
    })
  }

  componentDidMount() {
    axios.get("/api/count")
    .then((result) => {
      this.setState({
        pages: result.data
      })
      this.getQuestionsAndAnswers();
    })
  }

  render() {
    return (
      <Questions>
        <Header>
          <h1>Questions & Answers</h1>
          <span className="description">See all 20 Questions</span>
          <form>
            <button className="questionButton">Ask a Question</button>
            <button className="answerModalButton"><img width="18" height="15" src="https://img.icons8.com/fluent-systems-regular/24/000000/sort-down.png"/></button>
          </form>
        </Header>
        <QuestionList showAnswerModal = {this.state.showAnswerModal} toggleFollow={this.toggleFollow} showFollow={this.state.showFollow} mostVoted={this.state.mostVoted} showAllAnswers={this.state.showAllAnswers} showAll={this.showAll} answers={this.state.answers} questions = {this.state.questions}/>
        <Buttons>
          <button onClick={this.nextOrPrevious} className="previous">Previous</button>
          {this.state.pages.map(page =>
            <button className="buttonNames" onClick={this.changePage}>{page}</button>
          )}
          <button onClick={this.nextOrPrevious} className="next">Next</button>
        </Buttons>
      </Questions>
    )
  }
}

export default App;


      // showAllAnswers: {},


          // var showAllObject = this.state.showAllAnswers;
          // showAllObject[result.data.answers[0].questionsID] = false;


    // var showAllObject = this.state.showAllAnswers;
    // showAllObject[event.target.id] = !showAllObject[event.target.id];
    // this.setState({
    //   showAllAnswers: showAllObject
    // })