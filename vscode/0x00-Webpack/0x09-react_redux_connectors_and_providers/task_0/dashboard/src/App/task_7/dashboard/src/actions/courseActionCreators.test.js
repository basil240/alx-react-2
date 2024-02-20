import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchCourses, setCourses } from './courseActionCreators';
import { FETCH_COURSES_SUCCESS } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCourses action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches FETCH_COURSES_SUCCESS action on successful fetch', () => {
    const courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' }
    ];
    fetchMock.getOnce('/courses.json', { body: courses });

    const expectedActions = [
      { type: FETCH_COURSES_SUCCESS, data: courses }
    ];
    const store = mockStore({});

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});