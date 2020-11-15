import React from 'react';
import AnswerList from './AnswerList.jsx'
import axios from 'axios';
import Answer from './Answer.jsx'


class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: props.question,
      answers: [],
      showAllAnswers: false,
      mostVotedAnswer: null
    }

    this.getAnswers = this.getAnswers.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  getAnswers(event) {
    axios.get("/api/answers", {
      params: {
        questionID: this.state.question.id
      }
    })
    .then((result) => {
      var mostVoted;
      this.setState({
        answers: result.data.answers,
        mostVotedAnswer: result.data.mostVoted
      })
    })
  }


  showAll(event) {
    this.setState({
      showAllAnswers: !this.state.showAllAnswers
    })
  }

  componentDidMount() {
    this.getAnswers();
  }

  render() {
    return (
      <div className="question">
        {/* {console.log(this.state.question)} */}
        <h5>Question from {this.state.question.username}:</h5>
        <p>Location: {this.state.question.location}</p>
        <p>Contributions: {this.state.question.contributions}</p>
        <p>Review: {this.state.question.text}</p>
        {this.state.answers.length > 0
        ? <AnswerList mostVotedAnswer={this.state.mostVotedAnswer} showAllAnswers={this.state.showAllAnswers} showAll={this.showAll} answers={this.state.answers}/>
        : <form>
            <input></input>
            <button>Answer Question!</button>
          </form>}

        <p>-----------------------------------------------------------------------</p>
      </div>
    )
  }
}

// Remote Branch completed

// const Question = (props) => (
//   <div className="question">
//     <p>User: {props.question.username}</p>
//     <p>Location: {props.question.location}</p>
//     <p>Contributions: {props.question.contributions}</p>
//     <p>Review: {props.question.text}</p>
//     <p>-----------------------------------------------------------------------</p>
//   </div>
// )

export default Question;