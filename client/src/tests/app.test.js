import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.jsx';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('App Test', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});

describe('App ComponentDidMount', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    wrapper.instance().componentDidMount();
    setTimeout(() => {
      wrapper.state('active').should.be.true;
      expect(wrapper.exists()).toBe(true);
    }, 0)
  });
});
