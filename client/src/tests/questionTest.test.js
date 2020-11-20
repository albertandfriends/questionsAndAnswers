import React from 'react';
import { shallow } from 'enzyme';
import Question from '../components/Question.jsx';

function setup() {
  const wrapper = shallow(<Question question={{
    "id": 6,
    "username": "Tasha Schneider",
    "location": "Lake Jedidiah, New Mexico",
    "contributions": 210,
    "votes": 71,
    "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/any+(1).jpeg",
    "userID": 10,
    "text": "Laboriosam est molestiae ipsum in accusamus. Optio pariatur vel iure tempore fuga et. Et et dolorem. Veritatis eaque pariatur rerum consequatur. Voluptate animi id rerum laboriosam aliquam reiciendis beatae rerum.",
    "date": "May 2020",
    "attractionID": 1
}}/>);
  return { wrapper };
}

function populatedSetup() {
  const answers={"1": [
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
  ]};
  const questions=[
    {
        "id": 1,
        "username": "Tasha Schneider",
        "location": "Lake Jedidiah, New Mexico",
        "contributions": 210,
        "votes": 71,
        "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/any+(1).jpeg",
        "userID": 10,
        "text": "Laboriosam est molestiae ipsum in accusamus. Optio pariatur vel iure tempore fuga et. Et et dolorem. Veritatis eaque pariatur rerum consequatur. Voluptate animi id rerum laboriosam aliquam reiciendis beatae rerum.",
        "date": "May 2020",
        "attractionID": 1
    }
];
  const wrapper = shallow(<Question question={questions} addAnswer={() => {console.log("Hi")}} changeAnswer={() => {console.log("Hi")}} toggleAnswerModal = {() => {console.log("Hi")}} showAnswerModal = {() => {console.log("Hi")}} toggleFollow = {() => {console.log("Hi")}} showFollow = {true} mostVotedAnswer={{"1": {
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
}}} showAllAnswers={true} showAll={() => {console.log("Hi")}} answers={answers}/>);

  return { wrapper };
}


// describe('Question Empty Array', () => {
//   it('Should have an image', () => {
//     const { wrapper, props } = setup();
//     expect(wrapper.find('h4').exists()).toBe(true);
//   });
// });


describe('QuestionList Populated Questions', () => {
  it('Should have an image', () => {
    const { wrapper, props } = populatedSetup();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("img").exists()).toBe(true);
  });
});
