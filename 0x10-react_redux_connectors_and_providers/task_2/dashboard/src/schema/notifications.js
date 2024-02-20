// src/schema/notifications.js
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message }, { idAttribute: 'id' });

export const notificationListSchema = [notification];

// This function now accepts normalized data
export const getAllNotificationsByUser = (userId, normalizedData) => {
  const userNotifications = normalizedData.entities.users[userId]?.notifications;

  if (!userNotifications) {
    return [];
  }

  return userNotifications.map(notificationId => normalizedData.entities.notifications[notificationId]);
};