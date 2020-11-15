import React from 'react';
import axios from 'axios';
import QuestionList from './components/QuestionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      pageLimit: 10,
      totalPages: {},
      currentPage: null
    }

    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions(event) {
    axios.get("/api/questions")
    .then((result) => {
      this.setState({
        questions: result.data
      })
    })
  }

  paginateButtons() {
    var totalNumberOfPages = Math.ceil(this.state.questions.length / this.state.pageLimit);
    var pagesObject = {};
    var startingIndex = 0;
    for (var i = 1; i <= totalNumberOfPages; i++) {
      pagesObject[i] = [];
      var counter = startingIndex;
      for (var j = startingIndex; j < startingIndex + pageLimit; j++) {
        pagesObject[i].push(this.state.questions[j]);
        counter += 1;
      }
      startingIndex = counter;
    }
    this.setState({
      totalPages: pagesObject
    })
  }


  // insertNewQuestion(event) {
  //   axios.post("/api/postQuestion", {

  //   })
  // }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.getQuestions}>Push me!</button>
        <button onClick={this.getAnswers}>Push me!</button> */}
        {/* {console.log(this.state.questions)} */}
        <QuestionList questions = {this.state.questions}/>
        {/* <div>
          {Object.keys(this.state.totalPages).map(page =>
            <button onClick={}>{page}</button>
          )}
        </div> */}
      </div>
    )
  }
}

export default App;