// src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import * as notificationSelectors from './notificationSelectors';

describe('Notification Selectors', () => {
  const initialState = fromJS({
    entities: {
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      },
    },
    filter: 'DEFAULT',
  });

  test('filterTypeSelected works as expected', () => {
    const result = notificationSelectors.filterTypeSelected(initialState);
    expect(result).toEqual('DEFAULT');
  });

  test('getNotifications returns a list of the message entities within the reducer', () => {
    const result = notificationSelectors.getNotifications(initialState);
    const expected = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
    expect(result).toEqual(expected);
  });

  test('getUnreadNotifications return a list of the message entities within the reducer', () => {
    const result = notificationSelectors.getUnreadNotifications(initialState);
    const expected = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
    expect(result).toEqual(expected);
  });
});