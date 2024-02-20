import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should call setNotificationFilter with URGENT when the first button is clicked', () => {
    const setFilterMock = jest.fn();
    const wrapper = shallow(<Notifications setFilter={setFilterMock} />);
    wrapper.find('button').at(0).simulate('click');
    expect(setFilterMock).toHaveBeenCalledWith('URGENT');
  });

  it('should call setNotificationFilter with DEFAULT when the second button is clicked', () => {
    const setFilterMock = jest.fn();
    const wrapper = shallow(<Notifications setFilter={setFilterMock} />);
    wrapper.find('button').at(1).simulate('click');
    expect(setFilterMock).toHaveBeenCalledWith('DEFAULT');
  });
});