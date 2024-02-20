import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from './App';
import rootReducer from './reducers/rootReducer';

describe('App component', () => {
  // Modify mapStateToProps function
  it('maps state to props correctly', () => {
    const initialState = rootReducer(undefined, {});
    const stateToProps = mapStateToProps(initialState);
    // Your assertions for mapStateToProps
  });
});