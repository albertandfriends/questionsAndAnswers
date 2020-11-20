import React from 'react';
import { shallow } from 'enzyme';
import FollowModal from '../components/FollowModal.jsx';

function setup() {
  const wrapper = shallow(<FollowModal />);
  return { wrapper };
}


describe('FollowModal Test', () => {
  it('Should have an image', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find('button').exists()).toBe(true);
  });
});