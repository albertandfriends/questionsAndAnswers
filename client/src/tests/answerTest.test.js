
import React from 'react';
import { shallow } from 'enzyme';
import Answer from '../components/Answer.jsx';

function setup() {
  const answer = {
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
  }

  const wrapper = shallow(<Answer answer={answer}/>);
  return { wrapper };
}

describe('App Test', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
