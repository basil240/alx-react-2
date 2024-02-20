import rootReducer from './reducers/rootReducer';

describe('Root Reducer', () => {
  it('returns the initial state correctly', () => {
    const initialState = rootReducer(undefined, {});
    const expectedState = {
      courses: new Map(),
      notifications: new Map(),
      ui: new Map()
    };
    expect(initialState).toEqual(expectedState);
  });
});