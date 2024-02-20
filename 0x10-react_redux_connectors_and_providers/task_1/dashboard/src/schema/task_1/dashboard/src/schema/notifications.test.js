// src/schema/notifications.test.js
import { normalize } from 'normalizr';
import { notificationListSchema } from './notifications';

const testUserId = '5debd764a7c57c7839d722e9';

test('Normalized data should have a correct result array', () => {


  const normalizedData = normalize(/* your original data */, notificationListSchema);

  const expectedResults = [
    '5debd76480edafc8af244228',
    '5debd764507712e7a1307303',
  ];

  expect(Object.keys(normalizedData.entities.notifications)).toEqual(expectedResults);
});

test('Normalized data should have a correct users entity', () => {
  // ... Your normalized data creation logic here ...

  const normalizedData = normalize(/* your original data */, notificationListSchema);

  const expectedUser = {
    age: 25,
    email: 'poole.sanders@holberton.nz',
    id: '5debd764a7c57c7839d722e9',
    name: { first: 'Poole', last: 'Sanders' },
    picture: 'http://placehold.it/32x32',
  };

  expect(normalizedData.entities.users[testUserId]).toEqual(expectedUser);
});

test('Normalized data should have a correct messages entity', () => {
  // ... Your normalized data creation logic here ...

  const normalizedData = normalize(/* your original data */, notificationListSchema);

  const expectedMessage = {
    guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
    isRead: false,
    type: 'default',
    value: 'Cursus risus at ultrices mi.',
  };

  expect(normalizedData.entities.messages[expectedMessage.guid]).toEqual(expectedMessage);
});

test('Normalized data should have a correct notifications entity', () => {
  // ... Your normalized data creation logic here ...

  const normalizedData = normalize(/* your original data */, notificationListSchema);

  const expectedNotificationId = '5debd7642e815cd350407777';

  const expectedNotification = {
    author: '5debd764f8452ef92346c772',
    context: '3068c575-d619-40af-bf12-dece1ee18dd3',
    id: expectedNotificationId,
  };

  expect(normalizedData.entities.notifications[expectedNotificationId]).toEqual(
    expectedNotification
  );
});