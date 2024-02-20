import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('notificationSelector', () => {
  const state = fromJS({
    notifications: {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
        { id: 2, isRead: false, type: 'urgent', value: 'Notification 2' },
        { id: 3, isRead: true, type: 'default', value: 'Notification 3' },
      ],
    },
  });

  it('should return unread notifications for the DEFAULT filter', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result.size).toBe(2);
    expect(result.get(0).get('value')).toEqual('Notification 1');
    expect(result.get(1).get('value')).toEqual('Notification 2');
  });

  it('should return unread urgent notifications for the URGENT filter', () => {
    const stateWithUrgentFilter = state.setIn(['notifications', 'filter'], 'URGENT');
    const result = getUnreadNotificationsByType(stateWithUrgentFilter);
    expect(result.size).toBe(1);
    expect(result.get(0).get('value')).toEqual('Notification 2');
  });
});