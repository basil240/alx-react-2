// src/schema/notifications.js
import { schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages');
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const notificationsSchema = [notification];

export { notificationsSchema };