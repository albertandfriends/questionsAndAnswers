import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions(event) {
    axios.get("/api/questions")
    .then((result) => {
      console.log(result.data);
    })
  }

  render() {
    return (
      <button onClick={this.getQuestions}>Push me!</button>
    )
  }
}

export default App;