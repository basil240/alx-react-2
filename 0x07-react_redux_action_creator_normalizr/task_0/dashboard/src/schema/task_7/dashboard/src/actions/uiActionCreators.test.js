// src/actions/uiActionCreators.test.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('successful API request dispatches LOGIN and LOGIN_SUCCESS actions', async () => {
    fetchMock.getOnce('/login-success.json', {
      body: {},
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN },
      loginSuccess(),
    ];

    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', 'password123'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('failed API request dispatches LOGIN and LOGIN_FAILURE actions', async () => {
    fetchMock.getOnce('/login-success.json', {
      body: {},
      status: 500,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN },
      loginFailure(),
    ];

    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', 'password123'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});