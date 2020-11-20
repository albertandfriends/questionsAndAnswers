// const AnswerList = (props) => (
//   <List>
//     <ul>
//       {props.showAllAnswers === false
//       ? props.mostVotedAnswer ? <Answer answer={props.mostVotedAnswer} /> : <h5>No Answers For This Question</h5>
//       : (props.answers
//       ? props.answers.map(answer =>
//         <Answer answer={answer}/>)
//       : <h5>No Answers For This Question</h5>
//       )}
//     </ul>
//       {props.showAllAnswers
//       ? <button className="top" name={props.questionID} onClick={props.showAll}>Show top answer</button>
//       : <button className="top" name={props.questionID} onClick={props.showAll}>Show all answers</button>}

//   </List>

// )



import React from 'react';
import { shallow } from 'enzyme';
import AnswerList from '../components/AnswerList.jsx';

function setup() {
  const wrapper = shallow(<AnswerList answers={[]} showAllAnswers={false} questionID={"1"} showAll={() => {console.log("Hi")}}/>);
  return { wrapper };
}

function populatedSetup() {
  const answers=[
    {
        "id": 51,
        "username": "Theresa Hahn",
        "location": "Luettgenland, New Hampshire",
        "contributions": 258,
        "votes": 41,
        "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/people+(4).jpeg",
        "questionsID": 1,
        "userID": 24,
        "text": "Vitae quia inventore laborum ea ut odit voluptate ipsum molestiae. In aspernatur voluptatem veritatis eos rerum. Voluptas accusamus in. Et et quo dolor voluptatem laborum dolores.",
        "date": "Oct 2020"
    },
    {
        "id": 32,
        "username": "Daisy Braun Jr.",
        "location": "West Dorothyside, Delaware",
        "contributions": 228,
        "votes": 18,
        "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/any+(5).jpeg",
        "questionsID": 1,
        "userID": 14,
        "text": "Distinctio debitis repellat neque reprehenderit odit voluptatem est nisi aperiam. Nihil sint voluptas in et dolor qui. Quia et provident ut error. Non natus dolorem alias ex. Voluptate saepe ut iure dolore. Quae recusandae non reprehenderit.",
        "date": "Jan 2020"
    }
  ];
  const wrapper = shallow(<AnswerList answers={answers} showAllAnswers={true} mostVotedAnswer={    {
    "id": 51,
    "username": "Theresa Hahn",
    "location": "Luettgenland, New Hampshire",
    "contributions": 258,
    "votes": 41,
    "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/people+(4).jpeg",
    "questionsID": 1,
    "userID": 24,
    "text": "Vitae quia inventore laborum ea ut odit voluptate ipsum molestiae. In aspernatur voluptatem veritatis eos rerum. Voluptas accusamus in. Et et quo dolor voluptatem laborum dolores.",
    "date": "Oct 2020"
}} questionID={"1"} showAll={() => {console.log("Hi")}}/>);
  return { wrapper };
}


describe('AnswerList Empty Array', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h5').exists()).toBe(true);
  });
});

describe('AnswerList Populated Array', () => {
  it('Should have an image', () => {
    const { wrapper } = populatedSetup();
    expect(wrapper.exists()).toBe(true);
  });
});