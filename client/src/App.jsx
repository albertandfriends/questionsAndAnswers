import React from 'react';
import axios from 'axios';
import QuestionList from './components/QuestionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
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
      </div>
    )
  }
}

export default App;