import React from 'react';
import { shallow } from 'enzyme';
import AskQuestion from '../components/AskQuestion.jsx';

function setup() {
  const wrapper = shallow(<AskQuestion question={"1"} attraction={{title: "Winchester Mystery House"}} addQuestion={() => console.log("Hi")} changeQuestion={() => console.log("Hi")}/>);
  return { wrapper };
}


describe('AddQuestion Test', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find("h3").exists()).toBe(true);
  });
});