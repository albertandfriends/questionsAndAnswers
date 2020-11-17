import React from 'react';
import axios from 'axios';
import QuestionList from './components/QuestionList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      pageLimit: 5,
      pages: [],
      answers: {},
      showAllAnswers: false,
      mostVoted: {}
    }

    this.getQuestionsAndAnswers = this.getQuestionsAndAnswers.bind(this);
    this.changePage = this.changePage.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  showAll(event) {
    this.setState({
      showAllAnswers: !this.state.showAllAnswers
    })
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

          this.setState({
            answers: newAnswers,
            mostVoted: mostVotedObject,
            // showAllAnswers: showAllObject
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
      <div className="questionList">
        <QuestionList mostVoted={this.state.mostVoted} showAllAnswers={this.state.showAllAnswers} showAll={this.showAll} answers={this.state.answers} questions = {this.state.questions}/>
        <div className="buttons">
          {this.state.pages.map(page =>
            <button onClick={this.changePage}>{page}</button>
          )}
        </div>
      </div>
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