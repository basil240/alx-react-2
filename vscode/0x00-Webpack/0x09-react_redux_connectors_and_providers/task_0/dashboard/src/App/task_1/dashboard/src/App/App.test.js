import React from 'react';
import { shallow } from 'enzyme'; // Assuming you're using Enzyme for testing
import { App } from './App'; // Import the unconnected component

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays "User is logged in" when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<p>User is logged in</p>)).toBe(true);
  });

  it('displays "User is not logged in" when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.contains(<p>User is not logged in</p>)).toBe(true);
  });

  it('displays "Notification Drawer is visible" when displayDrawer is true', () => {
    const wrapper = shallow(<App displayDrawer={true} />);
    expect(wrapper.contains(<p>Notification Drawer is visible</p>)).toBe(true);
  });

  it('displays "Notification Drawer is hidden" when displayDrawer is false', () => {
    const wrapper = shallow(<App displayDrawer={false} />);
    expect(wrapper.contains(<p>Notification Drawer is hidden</p>)).toBe(true);
  });

  it('calls displayNotificationDrawer when "Display Notification Drawer" button is clicked', () => {
    const displayNotificationDrawerMock = jest.fn();
    const wrapper = shallow(<App displayNotificationDrawer={displayNotificationDrawerMock} />);
    wrapper.find('button').at(0).simulate('click');
    expect(displayNotificationDrawerMock).toHaveBeenCalledTimes(1);
  });

  it('calls hideNotificationDrawer when "Hide Notification Drawer" button is clicked', () => {
    const hideNotificationDrawerMock = jest.fn();
    const wrapper = shallow(<App hideNotificationDrawer={hideNotificationDrawerMock} />);
    wrapper.find('button').at(1).simulate('click');
    expect(hideNotificationDrawerMock).toHaveBeenCalledTimes(1);
  });
});