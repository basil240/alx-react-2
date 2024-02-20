// src/actions/notificationActionCreators.test.js
import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { NotificationTypeFilters } from './notificationActionTypes';

describe('notificationActionCreators', () => {
  test('markAsRead action creator', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };

    const result = markAsRead(index);

    expect(result).toEqual(expectedAction);
  });

  test('setNotificationFilter action creator', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };

    const result = setNotificationFilter(filter);

    expect(result).toEqual(expectedAction);
  });
});