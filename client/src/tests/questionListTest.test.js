import React from 'react';
import { shallow } from 'enzyme';
import QuestionList from '../components/QuestionList.jsx';

function setup() {
  const wrapper = shallow(<QuestionList questions={[]}/>);
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
  const questions=[
    {
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
    },
    {
        "id": 7,
        "username": "Ismael Beatty V",
        "location": "North Brooklyn, Ohio",
        "contributions": 731,
        "votes": 0,
        "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/any+(8).jpeg",
        "userID": 17,
        "text": "Error architecto vitae in debitis. Sed eaque eligendi voluptatibus non est ex delectus fugiat. Corporis libero quidem similique dicta. Laudantium saepe corrupti.",
        "date": "Dec 2019",
        "attractionID": 1
    },
    {
        "id": 8,
        "username": "Aaron Schultz",
        "location": "Zemlakfurt, South Carolina",
        "contributions": 969,
        "votes": 56,
        "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/any+(6).jpeg",
        "userID": 15,
        "text": "Autem modi voluptatem tempora totam. Excepturi ipsa molestias quia illo nemo quia reiciendis in. Nisi corporis omnis autem ratione.",
        "date": "Aug 2020",
        "attractionID": 1
    },
    {
        "id": 9,
        "username": "Janice Heller",
        "location": "Lake Jeffry, South Carolina",
        "contributions": 162,
        "votes": 65,
        "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/43.jpg",
        "userID": 2,
        "text": "Sed ipsum quasi delectus minus reprehenderit deserunt aspernatur tenetur. Voluptatem saepe veritatis id impedit maxime voluptas. Dolor assumenda rem quisquam et saepe sit ea. Veritatis velit omnis.",
        "date": "Oct 2020",
        "attractionID": 1
    },
    {
        "id": 10,
        "username": "Megan Morissette",
        "location": "North Jaeden, Michigan",
        "contributions": 463,
        "votes": 144,
        "profilePic": "https://tripuserphotos.s3-us-west-1.amazonaws.com/any+(7).jpeg",
        "userID": 16,
        "text": "Dolorum blanditiis mollitia maiores et rerum necessitatibus. Quidem nihil dolores. Cum perferendis impedit molestiae occaecati earum consequatur aut quo. Tenetur unde odio corporis qui ut. Sunt iste deserunt quibusdam quis culpa libero voluptas ab repellat.",
        "date": "Apr 2020",
        "attractionID": 1
    }
];
  const wrapper = shallow(<QuestionList questions={questions} addAnswer={() => {console.log("Hi")}} changeAnswer={() => {console.log("Hi")}} toggleAnswerModal = {() => {console.log("Hi")}} showAnswerModal = {() => {console.log("Hi")}} toggleFollow = {() => {console.log("Hi")}} showFollow = {true} mostVotedAnswer={{
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
}} showAllAnswers={true} showAll={() => {console.log("Hi")}} answers={answers}/>);
  return { wrapper };
}


describe('QuestionList Empty Array', () => {
  it('Should have an image', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find('h4').exists()).toBe(true);
  });
});


describe('QuestionList Populated Questions', () => {
  it('Should have an image', () => {
    const { wrapper, props } = populatedSetup();
    expect(wrapper.exists()).toBe(true);
  });
});

