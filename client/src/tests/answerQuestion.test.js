import React from 'react';
import { shallow } from 'enzyme';
import AnswerQuestion from '../components/AnswerQuestion.jsx';

function setup() {
  const wrapper = shallow(<AnswerQuestion question={"1"} attraction={{title: "Winchester Mystery House"}} addAnswer={() => console.log("Hi")}/>);
  return { wrapper };
}


describe('AnswerQuestion Test', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find("h3").exists()).toBe(true);
  });
});