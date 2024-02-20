import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fetchNotifications } from './actions/notificationActionCreators';

describe('NotificationsContainer', () => {
  let fetchNotificationsMock;
  beforeEach(() => {
    fetchNotificationsMock = jest.fn();
  });

  it('should fetch notifications on mount', () => {
    shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.exists()).toBe(true);
  });
});