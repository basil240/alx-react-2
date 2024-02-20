// src/schema/notifications.js
import { schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message,
  },
  { idAttribute: 'id' }
);

export const notificationListSchema = [notification];